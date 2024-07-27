import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  mensaje: string = '';
  codigo: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  verificarCodigo() {
    if (!this.codigo) {
      this.mensaje = 'Por favor, ingrese un código de farmacia.';
      return;
    }

    this.http.get<{ success: boolean, nombre?: string, message?: string }>(`http://localhost:3000/verificar-codigo/${this.codigo}`)
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.mensaje = `Farmacia encontrada: ${response.nombre}`;
            // Guardar el código de la farmacia en localStorage
            localStorage.setItem('codigo_farmacia', this.codigo);
            // Redirige al componente de Login
            this.router.navigate(['/login']);
          } else {
            this.mensaje = response.message || 'Código de farmacia no válido';
          }
        },
        error: (error) => {
          console.error('Error:', error);
          this.mensaje = 'Error al conectar con el servidor';
        }
      });
  }
}
