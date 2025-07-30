import Typography from '@mui/material/Typography';

//PENDIENTE: Agregue los props apellidos, nombres y paralelo
interface Data {
    apellidos: string[],
    nombres: string[],
    paralelo: number,
}

export default function Student( data: Data ) {
    return (
        <>
            <Typography component="p" variant="h4">
                {/* PENDIENTE: Renderice los props apellidos y nombres */}
                {data.apellidos[0]} {data.apellidos[1]} {data.nombres[0]} {data.nombres[1]}
            </Typography>
            <Typography component="h2" variant="h6"
                color="primary" gutterBottom>

                {/* PENDIENTE: Renderice el paralelo */}
                Paralelo # {data.paralelo}

            </Typography>
        </>
    )
}
