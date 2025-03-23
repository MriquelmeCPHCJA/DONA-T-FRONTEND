import { Box, Card, Typography, CardMedia } from "@mui/material";
import React from "react";

export const Mision = () => {
  const compromisoManosImg =
    "http://fmcegestion.cl/donat/compromiso-manos.webp";
  const voluntariosImg = "http://fmcegestion.cl/donat/voluntarios.webp";
  const ayudaImg = "http://fmcegestion.cl/donat/ayuda.webp";

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        sx={{
          marginTop: { xs: "3rem", sm: "4rem", md: "5rem" },
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          color="#3E792A"
          textAlign="center"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1.5rem", sm: "2rem" },
            p: 2,
          }}
        >
          Nuestra Misión
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        bgcolor="#f0f0f0"
        gap="0.5rem"
        sx={{
          flexWrap: { xs: "wrap", md: "nowrap" },
          p: 2,
          color: "text.primary",
        }}
      >
        <Typography
          variant="p"
          component="p"
          color="text.primary"
          textAlign="justify"
          margin="auto"
          sx={{
            fontSize: { xs: "0.85rem", lg: "1rem" },
            maxWidth: { xs: "95%", md: "60%" },
            p: 2,
          }}
        >
          Estamos profundamente comprometidos con brindar apoyo a las
          comunidades más vulnerables, especialmente a aquellas afectadas por
          desastres naturales en todo el país. Somos conscientes de que, debido
          a nuestra geografía y los cambios climáticos de los últimos años,
          muchas familias enfrentan crisis que ponen en riesgo su bienestar y
          seguridad. Es por eso que trabajamos incansablemente para llevar ayuda
          de manera rápida y eficiente, asegurándonos de que ningún afectado
          quede desamparado en momentos críticos.
        </Typography>
        <CardMedia
          component="img"
          image={compromisoManosImg}
          alt="Compromiso"
          sx={{
            borderRadius: "50%",
            width: { xs: "65%", sm: "30% " },
            display: { xs: "none", md: "block" },
          }}
        />
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        gap="0.5rem"
        sx={{
          flexWrap: { xs: "wrap", md: "nowrap" },
          p: 2,
          color: "text.primary",
        }}
      >
        <CardMedia
          component="img"
          image={voluntariosImg}
          alt="Voluntarios"
          sx={{
            borderRadius: "50%",
            width: { xs: "65%", sm: "30% " },
            display: { xs: "none", md: "block" },
          }}
        />
        <Typography
          variant="p"
          component="p"
          color="text.primary"
          textAlign="justify"
          margin="auto"
          sx={{
            fontSize: { xs: "0.85rem", lg: "1rem" },
            maxWidth: { xs: "95%", md: "60%" },
            p: 2,
          }}
        >
          Nuestra labor se basa en la solidaridad y la acción inmediata.
          Contamos con una red de centros de acopio distribuidos
          estratégicamente a lo largo del territorio, permitiendo que la
          asistencia llegue a quienes más lo necesitan en el menor tiempo
          posible. Recibimos y gestionamos donaciones de herramientas, ropa de
          cama, alimentos no perecibles, ropa de bebé y otros artículos
          esenciales para la recuperación de las familias damnificadas. Además,
          proporcionamos asesoramiento y apoyo emocional para que las personas
          afectadas puedan afrontar y superar la adversidad con esperanza y
          dignidad.
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        bgcolor="#f0f0f0"
        gap="0.5rem"
        sx={{
          flexWrap: { xs: "wrap", md: "nowrap" },
          p: 2,
          color: "text.primary",
        }}
      >
        <Typography
          variant="p"
          component="p"
          color="text.primary"
          textAlign="justify"
          margin="auto"
          sx={{
            fontSize: { xs: "0.85rem", lg: "1rem" },
            maxWidth: { xs: "95%", md: "60%" },
            p: 2,
          }}
        >
          Creemos firmemente en el poder de la comunidad y la participación
          activa de nuestros voluntarios. Cada donación y cada hora de servicio
          representan mucho más que un simple gesto de ayuda; son una
          oportunidad para transformar la vida de quienes han perdido todo. A
          través del trabajo conjunto, canalizamos la solidaridad en acciones
          concretas que permiten a las familias reconstruir sus hogares y
          recuperar la tranquilidad. Nuestra misión es clara: convertir el
          esfuerzo y compromiso de cada voluntario en una oportunidad de
          esperanza y reconstrucción para quienes han sido golpeados por la
          adversidad. Unidos, podemos marcar la diferencia y construir un futuro
          más resiliente para todos.
        </Typography>
        <CardMedia
          component="img"
          image={ayudaImg}
          alt="Ayuda"
          sx={{
            borderRadius: "50%",
            width: { xs: "65%", sm: "30% " },
            display: { xs: "none", md: "block" },
          }}
        />
      </Box>
    </>
  );
};
