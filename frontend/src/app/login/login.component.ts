import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class LoginComponent {
  usuario: string = '';
  contrasena: string = '';
  mensaje: string = '';
  codigoFarmacia: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.codigoFarmacia = localStorage.getItem('codigo_farmacia');
    if (!this.codigoFarmacia) {
      this.mensaje = 'Error: No se encontró el código de farmacia';
    }
  }

  iniciarSesion() {
    if (!this.codigoFarmacia) {
      this.mensaje = 'Error: No se encontró el código de farmacia';
      return;
    }
  
    if (!this.usuario || !this.contrasena) {
      this.mensaje = 'Por favor, ingrese usuario y contraseña';
      return;
    }
  
    const datosLogin = {
      usuario_us: this.usuario,
      password_us: this.contrasena,  // Cambiado de contrasena a password_us
      codigo_farmacia: this.codigoFarmacia
    };
  
    this.http.post<{ success: boolean, message: string, usuario?: any }>('http://localhost:3000/login', datosLogin)
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.mensaje = 'Inicio de sesión exitoso';
            if (response.usuario) {
              localStorage.setItem('usuario', JSON.stringify(response.usuario));
            }
            this.router.navigate(['/dashboard']);
          } else {
            this.mensaje = response.message || 'Error al iniciar sesión';
          }
        },
        error: (error) => {
          console.error('Error:', error);
          this.mensaje = 'Error al conectar con el servidor';
        }
      });
  }
}