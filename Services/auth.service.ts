import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post("https://dummy.restapiexample.com/api/v1/create", {
      data: {
        name: email,
        age: password,
      },
    });
  }

  getErrorMessages(message: string) {
    switch (message) {
      case "EMAIL_NOT_FOUND":
        return "Email not found";
      case "INVALID_PASSWORD":
        return "Invalid Password";
      case "TOO_MANY_ATTEMPTS":
        return "Too Many Attempts.";
      default:
        return message;
    }
  }
}
