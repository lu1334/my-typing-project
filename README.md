# Mecano Vibes

[Demo en vivo](https://my-typing-project.vercel.app/) · [Código fuente](https://github.com/lu1334/my-typing-project.git)

Construí esta app porque quería escribir mejor. Me di cuenta de que cuando programo me equivoco en las mismas combinaciones de teclas y casi nunca practico textos completos en español. Así que levanté este mini plan diario para entrenar dedos y cabeza: bloques cortos, cronómetro visible y ejercicios pensados para bajar las prisas.

## ¿Qué incluye?

- **Menú diario de 4 bloques**: una ruta guiada de 15 minutos que me recuerda por dónde empezar y cómo cerrar.
- **Cronómetro global**: todos los ejercicios comparten el mismo `CronoProvider`, así que pausar o reiniciar se siente consistente.
- **Calentamiento de precisión**: repetir palabras básicas sin usar backspace y contar errores para medir la mejora.
- **Drills temáticos**: combinaciones conflictivas (`tr`, `pr`, `br`…), tildes frecuentes, signos españoles y un modo mezcla que junta todo.
- **Texto real controlado**: escribir un párrafo lento, sin corregir hasta el final, para practicar foco y paciencia.
- **Drill personalizado**: un espacio en blanco para anotar las combinaciones que más me cuestan después de cada sesión.

## Tecnologías y estructura

- React + TypeScript sobre Vite.
- React Router para moverme entre bloques (`Home`, `LayoutDrills`, drills específicos, texto real y personalización).
- Context API simple (`CronoProvider`) que maneja el cronómetro, su estado y los botones de control.
- Componentes accesibles y textos en español para mantener el contexto del entrenamiento.

## Cómo correrla

```bash
pnpm install # o yarn/npm, lo que uses
pnpm dev
```

Luego entro a `http://localhost:5173` y sigo el plan diario.

## Próximos pasos que me gustaría intentar

1. Guardar los conteos de errores por bloque para ver progreso semanal.
2. Añadir sonidos o vibraciones suaves al terminar cada bloque.
3. Permitir que las frases objetivo se puedan editar desde la UI.

Si quieres practicar escritura consciente y también tocar un poco de React Router + contextos, este proyecto es un buen punto de partida.
