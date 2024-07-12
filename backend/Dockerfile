# Función del Archivo Docker
# Propósito: Este archivo Docker tiene la función de proporcionar un entorno de ejecución consistente y reproducible para tu aplicación de backend.
# Pasos Clave:
# - Instala las dependencias necesarias definidas en requirements.txt.
# - Configura variables de entorno específicas para entornos de desarrollo Python.
# - Define un punto de entrada (init.sh) para ejecutar configuraciones adicionales antes de que tu aplicación se ponga en funcionamiento.

# 1. Imagen de base
# Esta línea indica que el contenedor se basará en la imagen oficial de Docker python:3.10-bullseye, que proporciona un entorno Python 3.10 sobre Debian Bullseye (Debian 11).
FROM python:3.10-bullseye

# 2. Variables de Entorno (ENV PYTHONDONTWRITEBYTECODE=1 y ENV PYTHONUNBUFFERED=1):
# Estas variables de entorno son configuraciones comunes en entornos de desarrollo Python:
# PYTHONDONTWRITEBYTECODE=1: Evita que Python genere archivos de bytecode .pyc para mejorar la portabilidad y la limpieza.
# PYTHONUNBUFFERED=1: Asegura que la salida de Python se envíe directamente al terminal sin ser almacenada en un búfer intermedio, lo que es útil para ver la salida de forma inmediata.
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# 3. Directorio de Trabajo (WORKDIR /apps):
# Establece /apps como el directorio de trabajo dentro del contenedor. Todas las operaciones posteriores se realizarán en este directorio a menos que se especifique lo contrario.
WORKDIR /apps

# 4. Instalación de Dependencias (RUN pip install --upgrade pip y RUN pip install -r requirements.txt):
# Actualiza pip a la última versión y luego instala las dependencias listadas en requirements.txt usando pip.
RUN pip install --upgrade pip
COPY ./requirements.txt .
COPY ./init.sh .
RUN pip install -r requirements.txt

# 5. Copiar el proyecto en general (COPY ./requirements.txt . y COPY . .):
# COPY ./requirements.txt .: Copia el archivo requirements.txt desde el directorio local al directorio de trabajo (/apps) dentro del contenedor.
# COPY ./init.sh .: Copia el archivo init.sh desde el directorio local al directorio de trabajo dentro del contenedor.
# COPY . .: Copia todo el contenido del directorio local al directorio de trabajo dentro del contenedor. Esto incluirá todos los archivos y subdirectorios del proyecto.
COPY . .

# 6. Entrypoint (ENTRYPOINT [ "sh" , "init.sh" ]):
# Establece init.sh como el punto de entrada del contenedor. Esto significa que cuando el contenedor se inicie, ejecutará sh init.sh. Esto es útil para realizar configuraciones adicionales, como configurar variables de entorno adicionales, iniciar servicios, etc.
ENTRYPOINT [ "sh" , "init.sh" ]
