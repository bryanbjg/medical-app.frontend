# 📅 Aplicación de Reservas para restaurantes
## 🚀 Instalación y Configuración

```sh
# Clonar el repositorio
```git clone https://github.com/usuario/repo.git```

# Entrar al proyecto
```cd repo```

# Instalar dependencias
```npm install```
# 📌 Reglas de Código

# 📑 ESLint y SonarLint

1- Se usa ESLint para mantener un código limpio.

2- Se requiere JSDoc en todas las funciones y clases.

3- No se permite el uso de any.

4- Se implementan principios SOLID.

5- Se recomienda instalar SonarLint en VS Code.

# 🚦 Reglas para Commits
Usamos Husky para validar ESLint antes de hacer un commit.

Los commits deben seguir la convención Conventional Commits:
```feat: Nueva funcionalidad.```
```fix: Corrección de errores.```
```docs: Documentación.```
```chore: Mantenimiento.```
```test: Pruebas.```
```refactor: Refactorización.```

Ejemplo de commit válido:

```git commit -m "feat(auth): implement login system"```

# ✅ Contribuciones

```Fork```el repositorio.
Crea una rama con tu feature:

```git checkout -b feature-nueva```

Asegúrate de cumplir las reglas de ESLint.

Haz commit siguiendo la convención:

```git commit -m "feat(api): mejorar respuesta JSON"```
```Pull Request a main.```
