import React from "react";
import {
  Box,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";

export const Nosotros = () => {
  
  const compromisoManosImg =
    "http://fmcegestion.cl/donat/compromiso-manos.webp";
  const voluntariosImg = "http://fmcegestion.cl/donat/voluntarios.webp";
  const ayudaImg = "http://fmcegestion.cl/donat/ayuda.webp";

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        backgroundColor="#3E792A"
        sx={{
          marginTop: { xs: "3rem", sm: "4rem", md: "5rem" },
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          color="#F1CF2E"
          textAlign="center"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1.5rem", sm: "4rem" },
            p: 2,
          }}
        >
          Sobre Nosotros
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        bgcolor="#F1CF2E"
        gap="0.5rem"
        sx={{
          flexWrap: { xs: "wrap", md: "nowrap" },
          p: 2,
          color: "text.primary",
        }}
      >
        <Card
          sx={{
            maxWidth: "30%",
            borderRadius: "4rem",
            display: { xs: "none", lg: "block" },
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              image="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fD"
              alt="green iguana"
              sx={{
                borderRadius: "50%",
                width: 340,
                height: 340,
                margin: "auto",
                padding: "0.5rem",
              }}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                textAlign="center"
              >
                Fundador
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary" }}
                textAlign="center"
              >
                Antonio Banderas
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary" }}
                textAlign="center"
              >
                Ing. Comercial
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Typography
          variant="p"
          component="p"
          color="#3E792A"
          textAlign="justify"
          margin="auto"
          sx={{
            fontSize: { xs: "0.85rem", lg: "1.5rem" },
            maxWidth: { xs: "95%", md: "60%" },
            p: 2,
          }}
        >
          Nuestra fundación surge hace X años, a raíz de la necesidad de enviar
          ayuda a familias afectadas por las devastaciones provocadas por
          desastres naturales como incendios forestales, pérdidas materiales
          tras el terremoto del 2010 y la destrucción de viviendas por
          aluviones. Todo comenzó cuando un grupo de voluntarios profesionales
          del área de la salud se planteó el desafío de reunir aportes para
          enviar canastas familiares a los damnificados. Desde ese momento, este
          movimiento solidario tomó fuerza y creció hasta convertirse en una
          fundación comprometida con brindar asistencia a quienes más lo
          necesitan en todo el país.
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        gap="0.5rem"
        bgcolor="#3E792A"
        sx={{
          flexWrap: { xs: "wrap", md: "nowrap" },
          p: 2,
          color: "text.primary",
        }}
      >
        <Card
          sx={{
            maxWidth: "30%",
            borderRadius: "4rem",
            display: { xs: "none", lg: "block" },
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              image="https://images.unsplash.com/photo-1573497491765-dccce02b29df?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="green iguana"
              sx={{
                borderRadius: "50%",
                width: 340,
                height: 340,
                margin: "auto",
                padding: "0.5rem",
              }}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                textAlign="center"
              >
                Colaborador
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary" }}
                textAlign="center"
              >
                Barbara Mejia
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary" }}
                textAlign="center"
              >
                Ing. Comercial
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Typography
          variant="p"
          component="p"
          color="#F1CF2E"
          textAlign="justify"
          margin="auto"
          sx={{
            fontSize: { xs: "0.85rem", lg: "1.5rem" },
            maxWidth: { xs: "95%", md: "60%" },
            p: 2,
          }}
        >
          A lo largo de los años, nuestra labor ha evolucionado, permitiéndonos
          no solo entregar ayuda material, sino también proporcionar apoyo
          psicológico, atención médica y dental gratuita, y colaborar
          activamente en la reconstrucción de infraestructuras esenciales en
          comunidades devastadas. Gracias al compromiso de nuestros voluntarios
          y el respaldo de nuestras empresas asociadas, hemos logrado
          identificar y atender las necesidades más urgentes de quienes han
          sufrido los efectos de desastres como los incendios en la zona central
          de Chile y las inundaciones que afectaron al sur del país en el último
          invierno.
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        bgcolor="#B2D980"
        gap="0.5rem"
        sx={{
          flexWrap: { xs: "wrap", md: "nowrap" },
          p: 2,
          color: "text.primary",
        }}
      >
        <Card
          sx={{
            maxWidth: "30%",
            borderRadius: "4rem",
            display: { xs: "none", lg: "block" },
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="green iguana"
              sx={{
                borderRadius: "50%",
                width: 340,
                height: 340,
                margin: "auto",
                padding: "0.5rem",
              }}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                textAlign="center"
              >
                Coordinadora
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary" }}
                textAlign="center"
              >
                Patricia Araneda
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary" }}
                textAlign="center"
              >
                Ing. Comercial
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Typography
          variant="p"
          component="p"
          color="#3E792A"
          textAlign="justify"
          margin="auto"
          sx={{
            fontSize: { xs: "0.85rem", lg: "1.5rem" },
            maxWidth: { xs: "95%", md: "60%" },
            p: 2,
          }}
        >
          Nuestro equipo de voluntarios está compuesto por arquitectos,
          enfermeros, profesores, kinesiólogos, personal del área de la
          construcción y muchos otros profesionales que garantizan una respuesta
          rápida y eficiente en cada emergencia. Sin embargo, nuestra labor no
          sería posible sin el apoyo de quienes confían en nuestro trabajo y
          contribuyen económicamente a través de nuestra página web. Cada
          aporte, sin importar el monto, nos permite seguir entregando ayuda a
          las familias afectadas, asegurando que nuestra misión de solidaridad y
          reconstrucción continúe llegando a quienes más lo necesitan.
        </Typography>
      </Box>
    </>
  );
};
