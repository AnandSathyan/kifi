import axios, { AxiosResponse, AxiosError } from "axios";

class ApiClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  public async get<T>(url: string): Promise<T> 
  
  {
    try {
      console.log("urlurl",url);
      
      const response: AxiosResponse<T> = await axios.get<T>(
        this.baseURL + url,
        {
          headers: {
            Authorization:"Bearer "+sessionStorage.getItem("AuthToken"), 
            location_id:2
          },
          
        }
      );
      return response.data;
    } catch (error) {
      this.handleError(error as AxiosError);
      throw error;
    }
  }

  public async post<T>(url: string, auth: any, data: any): Promise<T> {
    console.log("authauthauth",data);
    
    try {
      const response: AxiosResponse<T> = await axios.post<T>(
        this.baseURL + url,
        auth,
        {
          
          headers: {
            Authorization: "Bearer "+sessionStorage.getItem("AuthToken"),
            location_id:2
          },
        }
      );
      return response.data;
    } catch (error) {
      this.handleError(error as AxiosError);
      throw error;
    }
  }

  public async put<T>(url: string,auth: any, data: any): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.put<T>(
        this.baseURL + url,
        data,
        {
          headers: {
            Authorization:"Bearer "+ sessionStorage.getItem("AuthToken"),
            location_id: 2,
          },
        }
      );
      return response.data;
    } catch (error) {
      this.handleError(error as AxiosError);
      throw error;
    }
  }

  public async delete<T>(url: string): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.delete<T>(
        this.baseURL + url,
        {
          headers: {
            Authorization:"Bearer "+ sessionStorage.getItem("AuthToken"),
            location_id: 2,
          },
        }
      );
      return response.data;
    } catch (error) {
      this.handleError(error as AxiosError);
      throw error;
    }
  }

  private handleError(error: AxiosError): void {
    if (error.response) {
      console.error("Request failed with response:", error.response.data);
    } else if (error.request) {
      console.error("Request failed:", error.request);
    } else {
      console.error("Error:", error.message);
    }
  }
}

export default ApiClient;
