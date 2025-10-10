export interface Event {
  _id: string;
  title: string;
  date: string;
  venue: string;
  description: string;
  type: "upcoming" | "live" | "past";
  image: string;
  link?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// API helper function
const apiRequest = async <T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'API request failed');
    }

    return data;
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};

// Get all events from API
export const getEvents = async (params?: {
  type?: "upcoming" | "live" | "past";
  limit?: number;
  page?: number;
}): Promise<Event[]> => {
  try {
    const queryParams = new URLSearchParams();
    if (params?.type) queryParams.append('type', params.type);
    if (params?.limit) queryParams.append('limit', params.limit.toString());
    if (params?.page) queryParams.append('page', params.page.toString());

    const response = await apiRequest<Event[]>(`/events?${queryParams}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};

// Add a new event
export const addEvent = async (eventData: FormData): Promise<Event> => {
  try {
    const response = await fetch(`${API_BASE_URL}/events`, {
      method: 'POST',
      body: eventData, // FormData for file upload
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to add event');
    }

    return data.data;
  } catch (error) {
    console.error("Error adding event:", error);
    throw new Error("Failed to add event");
  }
};

// Update an existing event
export const updateEvent = async (id: string, eventData: FormData): Promise<Event> => {
  try {
    const response = await fetch(`${API_BASE_URL}/events/${id}`, {
      method: 'PUT',
      body: eventData, // FormData for file upload
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to update event');
    }

    return data.data;
  } catch (error) {
    console.error("Error updating event:", error);
    throw new Error("Failed to update event");
  }
};

// Delete an event
export const deleteEvent = async (id: string): Promise<boolean> => {
  try {
    const response = await apiRequest(`/events/${id}`, {
      method: 'DELETE',
    });

    return response.success;
  } catch (error) {
    console.error("Error deleting event:", error);
    throw new Error("Failed to delete event");
  }
};

// Get event by ID
export const getEventById = async (id: string): Promise<Event | null> => {
  try {
    const response = await apiRequest<Event>(`/events/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error getting event:", error);
    return null;
  }
};

// Get events by type
export const getEventsByType = async (type: "upcoming" | "live" | "past"): Promise<Event[]> => {
  try {
    const response = await apiRequest<Event[]>(`/events?type=${type}`);
    return response.data;
  } catch (error) {
    console.error("Error filtering events:", error);
    return [];
  }
};

// Search events
export const searchEvents = async (query: string, type?: "upcoming" | "live" | "past"): Promise<Event[]> => {
  try {
    const params = new URLSearchParams({ q: query });
    if (type) params.append('type', type);

    const response = await apiRequest<Event[]>(`/events/search?${params}`);
    return response.data;
  } catch (error) {
    console.error("Error searching events:", error);
    return [];
  }
};

// Health check
export const checkApiHealth = async (): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    return response.ok;
  } catch (error) {
    console.error("API health check failed:", error);
    return false;
  }
};
