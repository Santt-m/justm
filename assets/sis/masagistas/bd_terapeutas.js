const terapeutas = [
    // Terapeuta 0
    {
        ID: 0,
        nai: 0,
        tags: ["masaje relajante", "masculino", "ciudad de méxico"],
        Nombre: "Carlos García",
        Genero: "Masculino",
        Ubicacion: "Ciudad de México",
        CiudadesYes: ["Ciudad de México", "Toluca", "Puebla"],
        CiudadesNo: ["Guadalajara", "Monterrey"],
        whatsapp: "+1234567890",
        redes: ["Instagram: @carlosg", "Facebook: Carlos García"],
        dias: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"],
        horarios: ["09:00", "13:00", "17:00", "21:00"],
        masageType: ["Masaje relajante"],
        text1: "Soy un terapeuta profesional con experiencia en masajes relajantes para aliviar el estrés y la tensión muscular.",
        text2: "Ofrezco un ambiente tranquilo y relajado para que te sientas cómodo durante la sesión de masaje.",
        text3: "¡Contáctame para reservar una cita y disfrutar de un momento de relajación!",
        img0: `./NAI/0/img0.jpg`,
        img1: `./NAI/0/img1.jpg`,
        img2: `./NAI/0/img2.jpg`,
        img3: `./NAI/0/img3.jpg`,
        img4: `./NAI/0/img4.jpg`,
        img5: `./NAI/0/img5.jpg`
    },
    // Terapeuta 1
    {
        ID: 1,
        nai: 1,
        tags: ["masaje deportivo", "femenino", "ciudad de méxico"],
        Nombre: "Ana Martínez",
        Genero: "Femenino",
        Ubicacion: "Ciudad de México",
        CiudadesYes: ["Ciudad de México", "Puebla", "Querétaro"],
        CiudadesNo: ["Monterrey", "Toluca"],
        whatsapp: "+2345678901",
        redes: ["Facebook: Ana Martínez", "Instagram: @anam"],
        dias: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
        horarios: ["10:00", "14:00", "18:00", "22:00"],
        masageType: ["Masaje deportivo"],
        text1: "Especialista en masajes deportivos para mejorar el rendimiento y prevenir lesiones.",
        text2: "Mis sesiones están diseñadas para adaptarse a las necesidades específicas de cada cliente.",
        text3: "¡Reserva una cita conmigo y experimenta los beneficios de un masaje deportivo profesional!",
        img0: `./NAI/1/img0.jpg`,
        img1: `./NAI/1/img1.jpg`,
        img2: `./NAI/1/img2.jpg`,
        img3: `./NAI/1/img3.jpg`,
        img4: `./NAI/1/img4.jpg`,
        img5: `./NAI/1/img5.jpg`
    },
    // Terapeuta 2
    {
        ID: 2,
        nai: 2,
        tags: ["masaje tailandés", "femenino", "ciudad de méxico"],
        Nombre: "María Pérez",
        Genero: "Femenino",
        Ubicacion: "Ciudad de México",
        CiudadesYes: ["Ciudad de México", "Puebla", "Guadalajara"],
        CiudadesNo: ["Monterrey", "Toluca"],
        whatsapp: "+3456789012",
        redes: ["Twitter: @maria_p", "Instagram: @maria_p"],
        dias: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
        horarios: ["11:00", "15:00", "19:00", "23:00"],
        masageType: ["Masaje tailandés"],
        text1: "Especialista en técnicas de masaje tailandés para aliviar el estrés y mejorar la flexibilidad.",
        text2: "Mis sesiones de masaje están diseñadas para proporcionar una experiencia de relajación profunda.",
        text3: "¡Contáctame para reservar una cita y experimentar los beneficios del masaje tailandés!",
        img0: `./NAI/2/img0.jpg`,
        img1: `./NAI/2/img1.jpg`,
        img2: `./NAI/2/img2.jpg`,
        img3: `./NAI/2/img3.jpg`,
        img4: `./NAI/2/img4.jpg`,
        img5: `./NAI/2/img5.jpg`
    },
    // Continúa agregando terapeutas del 3 al 19 aquí
    // Terapeuta 3
    {
        ID: 3,
        nai: 3,
        tags: ["masaje sueco", "masculino", "ciudad de méxico"],
        Nombre: "Alejandro Rodríguez",
        Genero: "Masculino",
        Ubicacion: "Ciudad de México",
        CiudadesYes: ["Ciudad de México", "Puebla", "Toluca"],
        CiudadesNo: ["Guadalajara", "Monterrey"],
        whatsapp: "+4567890123",
        redes: ["Twitter: @alejandror", "Instagram: @alejandror"],
        dias: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"],
        horarios: ["10:00", "14:00", "18:00", "22:00"],
        masageType: ["Masaje sueco"],
        text1: "Especialista en masajes suecos para aliviar el estrés y la tensión muscular.",
        text2: "Mis técnicas de masaje están diseñadas para proporcionar una experiencia de relajación profunda.",
        text3: "¡Contáctame para reservar una cita y disfrutar de un momento de bienestar y relajación!",
        img0: `./NAI/3/img0.jpg`,
        img1: `./NAI/3/img1.jpg`,
        img2: `./NAI/3/img2.jpg`,
        img3: `./NAI/3/img3.jpg`,
        img4: `./NAI/3/img4.jpg`,
        img5: `./NAI/3/img5.jpg`
    },
    // Terapeuta 4
    {
        ID: 4,
        nai: 4,
        tags: ["masaje terapéutico", "femenino", "ciudad de méxico"],
        Nombre: "Laura González",
        Genero: "Femenino",
        Ubicacion: "Ciudad de México",
        CiudadesYes: ["Ciudad de México", "Toluca", "Puebla"],
        CiudadesNo: ["Guadalajara", "Monterrey"],
        whatsapp: "+5678901234",
        redes: ["Facebook: Laura González", "Instagram: @laurag"],
        dias: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
        horarios: ["09:00", "13:00", "17:00", "21:00"],
        masageType: ["Masaje terapéutico"],
        text1: "Experta en masajes terapéuticos para aliviar dolores musculares y mejorar la movilidad.",
        text2: "Mis sesiones están diseñadas para proporcionar alivio y bienestar a mis clientes.",
        text3: "¡Agenda una cita conmigo para experimentar los beneficios de un masaje terapéutico!",
        img0: `./NAI/4/img0.jpg`,
        img1: `./NAI/4/img1.jpg`,
        img2: `./NAI/4/img2.jpg`,
        img3: `./NAI/4/img3.jpg`,
        img4: `./NAI/4/img4.jpg`,
        img5: `./NAI/4/img5.jpg`
    },
    // Terapeuta 5
    {
        ID: 5,
        nai: 5,
        tags: ["masaje de tejido profundo", "masculino", "ciudad de méxico"],
        Nombre: "Javier Martínez",
        Genero: "Masculino",
        Ubicacion: "Ciudad de México",
        CiudadesYes: ["Ciudad de México", "Toluca", "Puebla"],
        CiudadesNo: ["Guadalajara", "Monterrey"],
        whatsapp: "+6789012345",
        redes: ["Twitter: @javierm", "Instagram: @javierm"],
        dias: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
        horarios: ["10:00", "14:00", "18:00", "22:00"],
        masageType: ["Masaje de tejido profundo"],
        text1: "Especialista en masajes de tejido profundo para aliviar la tensión muscular y mejorar la movilidad.",
        text2: "Mis técnicas de masaje están diseñadas para proporcionar alivio duradero y bienestar general.",
        text3: "¡Contáctame para reservar una cita y experimentar los beneficios del masaje de tejido profundo!",
        img0: `./NAI/5/img0.jpg`,
        img1: `./NAI/5/img1.jpg`,
        img2: `./NAI/5/img2.jpg`,
        img3: `./NAI/5/img3.jpg`,
        img4: `./NAI/5/img4.jpg`,
        img5: `./NAI/5/img5.jpg`
    },
    // Terapeuta 6
    {
        ID: 6,
        nai: 6,
        tags: ["masaje de drenaje linfático", "femenino", "ciudad de méxico"],
        Nombre: "Sofía Ramírez",
        Genero: "Femenino",
        Ubicacion: "Ciudad de México",
        CiudadesYes: ["Ciudad de México", "Puebla", "Guadalajara"],
        CiudadesNo: ["Monterrey", "Toluca"],
        whatsapp: "+7890123456",
        redes: ["Facebook: Sofía Ramírez", "Instagram: @sofiar"],
        dias: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
        horarios: ["11:00", "15:00", "19:00", "23:00"],
        masageType: ["Masaje de drenaje linfático"],
        text1: "Experta en masajes de drenaje linfático para reducir la retención de líquidos y mejorar la circulación.",
        text2: "Mis sesiones de masaje están diseñadas para promover la desintoxicación y el bienestar.",
        text3: "¡Reserva una cita conmigo y experimenta los beneficios del masaje de drenaje linfático!",
        img0: `./NAI/6/img0.jpg`,
        img1: `./NAI/6/img1.jpg`,
        img2: `./NAI/6/img2.jpg`,
        img3: `./NAI/6/img3.jpg`,
        img4: `./NAI/6/img4.jpg`,
        img5: `./NAI/6/img5.jpg`
    },
    // Terapeuta 7
    {
        ID: 7,
        nai: 7,
        tags: ["masaje sueco", "femenino", "ciudad de méxico"],
        Nombre: "Fernanda López",
        Genero: "Femenino",
        Ubicacion: "Ciudad de México",
        CiudadesYes: ["Ciudad de México", "Puebla", "Toluca"],
        CiudadesNo: ["Guadalajara", "Monterrey"],
        whatsapp: "+8901234567",
        redes: ["Twitter: @fernandal", "Instagram: @fernandal"],
        dias: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
        horarios: ["09:00", "13:00", "17:00", "21:00"],
        masageType: ["Masaje sueco"],
        text1: "Especialista en masajes suecos para aliviar el estrés y la tensión muscular.",
        text2: "Mis técnicas de masaje están diseñadas para proporcionar una experiencia de relajación profunda.",
        text3: "¡Contáctame para reservar una cita y disfrutar de un momento de bienestar y relajación!",
        img0: `./NAI/7/img0.jpg`,
        img1: `./NAI/7/img1.jpg`,
        img2: `./NAI/7/img2.jpg`,
        img3: `./NAI/7/img3.jpg`,
        img4: `./NAI/7/img4.jpg`,
        img5: `./NAI/7/img5.jpg`
    },
    // Terapeuta 8
    {
        ID: 8,
        nai: 8,
        tags: ["masaje terapéutico", "masculino", "ciudad de méxico"],
        Nombre: "Diego Hernández",
        Genero: "Masculino",
        Ubicacion: "Ciudad de México",
        CiudadesYes: ["Ciudad de México", "Toluca", "Puebla"],
        CiudadesNo: ["Guadalajara", "Monterrey"],
        whatsapp: "+9012345678",
        redes: ["Facebook: Diego Hernández", "Instagram: @diegoh"],
        dias: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
        horarios: ["10:00", "14:00", "18:00", "22:00"],
        masageType: ["Masaje terapéutico"],
        text1: "Especialista en masajes terapéuticos para aliviar dolores musculares y mejorar la movilidad.",
        text2: "Mis sesiones están diseñadas para proporcionar alivio y bienestar a mis clientes.",
        text3: "¡Agenda una cita conmigo para experimentar los beneficios de un masaje terapéutico!",
        img0: `./NAI/8/img0.jpg`,
        img1: `./NAI/8/img1.jpg`,
        img2: `./NAI/8/img2.jpg`,
        img3: `./NAI/8/img3.jpg`,
        img4: `./NAI/8/img4.jpg`,
        img5: `./NAI/8/img5.jpg`
    },
    // Terapeuta 9
    {
        ID: 9,
        nai: 9,
        tags: ["masaje deportivo", "femenino", "ciudad de méxico"],
        Nombre: "Paola Gutiérrez",
        Genero: "Femenino",
        Ubicacion: "Ciudad de México",
        CiudadesYes: ["Ciudad de México", "Puebla", "Querétaro"],
        CiudadesNo: ["Monterrey", "Toluca"],
        whatsapp: "+0123456789",
        redes: ["Twitter: @paolag", "Instagram: @paolag"],
        dias: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
        horarios: ["11:00", "15:00", "19:00", "23:00"],
        masageType: ["Masaje deportivo"],
        text1: "Especialista en masajes deportivos para mejorar el rendimiento y prevenir lesiones.",
        text2: "Mis sesiones están diseñadas para adaptarse a las necesidades específicas de cada cliente.",
        text3: "¡Reserva una cita conmigo y experimenta los beneficios de un masaje deportivo profesional!",
        img0: `./NAI/9/img0.jpg`,
        img1: `./NAI/9/img1.jpg`,
        img2: `./NAI/9/img2.jpg`,
        img3: `./NAI/9/img3.jpg`,
        img4: `./NAI/9/img4.jpg`,
        img5: `./NAI/9/img5.jpg`
    },
    // Terapeuta 10
    {
        ID: 10,
        nai: 10,
        tags: ["masaje tailandés", "femenino", "ciudad de méxico"],
        Nombre: "Lucía Díaz",
        Genero: "Femenino",
        Ubicacion: "Ciudad de México",
        CiudadesYes: ["Ciudad de México", "Puebla", "Guadalajara"],
        CiudadesNo: ["Monterrey", "Toluca"],
        whatsapp: "+1234567890",
        redes: ["Facebook: Lucía Díaz", "Instagram: @luciad"],
        dias: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
        horarios: ["09:00", "13:00", "17:00", "21:00"],
        masageType: ["Masaje tailandés"],
        text1: "Especialista en técnicas de masaje tailandés para aliviar el estrés y mejorar la flexibilidad.",
        text2: "Mis sesiones de masaje están diseñadas para proporcionar una experiencia de relajación profunda.",
        text3: "¡Contáctame para reservar una cita y experimentar los beneficios del masaje tailandés!",
        img0: `./NAI/10/img0.jpg`,
        img1: `./NAI/10/img1.jpg`,
        img2: `./NAI/10/img2.jpg`,
        img3: `./NAI/10/img3.jpg`,
        img4: `./NAI/10/img4.jpg`,
        img5: `./NAI/10/img5.jpg`
    },
    // Terapeuta 11
    {
        ID: 11,
        nai: 11,
        tags: ["masaje relajante", "masculino", "ciudad de méxico"],
        Nombre: "Héctor Ramírez",
        Genero: "Masculino",
        Ubicacion: "Ciudad de México",
        CiudadesYes: ["Ciudad de México", "Toluca", "Puebla"],
        CiudadesNo: ["Guadalajara", "Monterrey"],
        whatsapp: "+2345678901",
        redes: ["Twitter: @hectorr", "Instagram: @hectorr"],
        dias: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
        horarios: ["10:00", "14:00", "18:00", "22:00"],
        masageType: ["Masaje relajante"],
        text1: "Soy un terapeuta profesional con experiencia en masajes relajantes para aliviar el estrés y la tensión muscular.",
        text2: "Ofrezco un ambiente tranquilo y relajado para que te sientas cómodo durante la sesión de masaje.",
        text3: "¡Contáctame para reservar una cita y disfrutar de un momento de relajación!",
        img0: `./NAI/11/img0.jpg`,
        img1: `./NAI/11/img1.jpg`,
        img2: `./NAI/11/img2.jpg`,
        img3: `./NAI/11/img3.jpg`,
        img4: `./NAI/11/img4.jpg`,
        img5: `./NAI/11/img5.jpg`
    },
    // Terapeuta 12
    {
        ID: 12,
        nai: 12,
        tags: ["masaje deportivo", "femenino", "ciudad de méxico"],
        Nombre: "Daniela Martínez",
        Genero: "Femenino",
        Ubicacion: "Ciudad de México",
        CiudadesYes: ["Ciudad de México", "Puebla", "Querétaro"],
        CiudadesNo: ["Monterrey", "Toluca"],
        whatsapp: "+3456789012",
        redes: ["Facebook: Daniela Martínez", "Instagram: @danielam"],
        dias: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
        horarios: ["11:00", "15:00", "19:00", "23:00"],
        masageType: ["Masaje deportivo"],
        text1: "Especialista en masajes deportivos para mejorar el rendimiento y prevenir lesiones.",
        text2: "Mis sesiones están diseñadas para adaptarse a las necesidades específicas de cada cliente.",
        text3: "¡Reserva una cita conmigo y experimenta los beneficios de un masaje deportivo profesional!",
        img0: `./NAI/12/img0.jpg`,
        img1: `./NAI/12/img1.jpg`,
        img2: `./NAI/12/img2.jpg`,
        img3: `./NAI/12/img3.jpg`,
        img4: `./NAI/12/img4.jpg`,
        img5: `./NAI/12/img5.jpg`
    },
    // Terapeuta 13
    {
        ID: 13,
        nai: 13,
        tags: ["masaje sueco", "femenino", "ciudad de méxico"],
        Nombre: "Valeria Gómez",
        Genero: "Femenino",
        Ubicacion: "Ciudad de México",
        CiudadesYes: ["Ciudad de México", "Puebla", "Toluca"],
        CiudadesNo: ["Guadalajara", "Monterrey"],
        whatsapp: "+4567890123",
        redes: ["Twitter: @valeriag", "Instagram: @valeriag"],
        dias: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
        horarios: ["09:00", "13:00", "17:00", "21:00"],
        masageType: ["Masaje sueco"],
        text1: "Especialista en masajes suecos para aliviar el estrés y la tensión muscular.",
        text2: "Mis técnicas de masaje están diseñadas para proporcionar una experiencia de relajación profunda.",
        text3: "¡Contáctame para reservar una cita y disfrutar de un momento de bienestar y relajación!",
        img0: `./NAI/13/img0.jpg`,
        img1: `./NAI/13/img1.jpg`,
        img2: `./NAI/13/img2.jpg`,
        img3: `./NAI/13/img3.jpg`,
        img4: `./NAI/13/img4.jpg`,
        img5: `./NAI/13/img5.jpg`
    },
    // Terapeuta 14
    {
        ID: 14,
        nai: 14,
        tags: ["masaje terapéutico", "masculino", "ciudad de méxico"],
        Nombre: "Miguel Rodríguez",
        Genero: "Masculino",
        Ubicacion: "Ciudad de México",
        CiudadesYes: ["Ciudad de México", "Toluca", "Puebla"],
        CiudadesNo: ["Guadalajara", "Monterrey"],
        whatsapp: "+5678901234",
        redes: ["Facebook: Miguel Rodríguez", "Instagram: @miguelr"],
        dias: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
        horarios: ["10:00", "14:00", "18:00", "22:00"],
        masageType: ["Masaje terapéutico"],
        text1: "Especialista en masajes terapéuticos para aliviar dolores musculares y mejorar la movilidad.",
        text2: "Mis sesiones están diseñadas para proporcionar alivio y bienestar a mis clientes.",
        text3: "¡Agenda una cita conmigo para experimentar los beneficios de un masaje terapéutico!",
        img0: `./NAI/14/img0.jpg`,
        img1: `./NAI/14/img1.jpg`,
        img2: `./NAI/14/img2.jpg`,
        img3: `./NAI/14/img3.jpg`,
        img4: `./NAI/14/img4.jpg`,
        img5: `./NAI/14/img5.jpg`
    },
    // Terapeuta 15
    {
        ID: 15,
        nai: 15,
        tags: ["masaje deportivo", "femenino", "ciudad de méxico"],
        Nombre: "Gabriela Fernández",
        Genero: "Femenino",
        Ubicacion: "Ciudad de México",
        CiudadesYes: ["Ciudad de México", "Puebla", "Querétaro"],
        CiudadesNo: ["Monterrey", "Toluca"],
        whatsapp: "+6789012345",
        redes: ["Twitter: @gabrielaf", "Instagram: @gabrielaf"],
        dias: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
        horarios: ["11:00", "15:00", "19:00", "23:00"],
        masageType: ["Masaje deportivo"],
        text1: "Especialista en masajes deportivos para mejorar el rendimiento y prevenir lesiones.",
        text2: "Mis sesiones están diseñadas para adaptarse a las necesidades específicas de cada cliente.",
        text3: "¡Reserva una cita conmigo y experimenta los beneficios de un masaje deportivo profesional!",
        img0: `./NAI/15/img0.jpg`,
        img1: `./NAI/15/img1.jpg`,
        img2: `./NAI/15/img2.jpg`,
        img3: `./NAI/15/img3.jpg`,
        img4: `./NAI/15/img4.jpg`,
        img5: `./NAI/15/img5.jpg`
    },
    // Terapeuta 16
    {
        ID: 16,
        nai: 16,
        tags: ["masaje tailandés", "femenino", "ciudad de méxico"],
        Nombre: "Elena Pérez",
        Genero: "Femenino",
        Ubicacion: "Ciudad de México",
        CiudadesYes: ["Ciudad de México", "Puebla", "Guadalajara"],
        CiudadesNo: ["Monterrey", "Toluca"],
        whatsapp: "+7890123456",
        redes: ["Facebook: Elena Pérez", "Instagram: @elenap"],
        dias: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
        horarios: ["09:00", "13:00", "17:00", "21:00"],
        masageType: ["Masaje tailandés"],
        text1: "Especialista en técnicas de masaje tailandés para aliviar el estrés y mejorar la flexibilidad.",
        text2: "Mis sesiones de masaje están diseñadas para proporcionar una experiencia de relajación profunda.",
        text3: "¡Contáctame para reservar una cita y experimentar los beneficios del masaje tailandés!",
        img0: `./NAI/16/img0.jpg`,
        img1: `./NAI/16/img1.jpg`,
        img2: `./NAI/16/img2.jpg`,
        img3: `./NAI/16/img3.jpg`,
        img4: `./NAI/16/img4.jpg`,
        img5: `./NAI/16/img5.jpg`
    },
    // Terapeuta 17
    {
        ID: 17,
        nai: 17,
        tags: ["masaje relajante", "masculino", "ciudad de méxico"],
        Nombre: "Roberto López",
        Genero: "Masculino",
        Ubicacion: "Ciudad de México",
        CiudadesYes: ["Ciudad de México", "Toluca", "Puebla"],
        CiudadesNo: ["Guadalajara", "Monterrey"],
        whatsapp: "+8901234567",
        redes: ["Twitter: @robertol", "Instagram: @robertol"],
        dias: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
        horarios: ["10:00", "14:00", "18:00", "22:00"],
        masageType: ["Masaje relajante"],
        text1: "Soy un terapeuta profesional con experiencia en masajes relajantes para aliviar el estrés y la tensión muscular.",
        text2: "Ofrezco un ambiente tranquilo y relajado para que te sientas cómodo durante la sesión de masaje.",
        text3: "¡Contáctame para reservar una cita y disfrutar de un momento de relajación!",
        img0: `./NAI/17/img0.jpg`,
        img1: `./NAI/17/img1.jpg`,
        img2: `./NAI/17/img2.jpg`,
        img3: `./NAI/17/img3.jpg`,
        img4: `./NAI/17/img4.jpg`,
        img5: `./NAI/17/img5.jpg`
    },
    // Terapeuta 18
    {
        ID: 18,
        nai: 18,
        tags: ["masaje deportivo", "femenino", "ciudad de méxico"],
        Nombre: "Laura Martínez",
        Genero: "Femenino",
        Ubicacion: "Ciudad de México",
        CiudadesYes: ["Ciudad de México", "Puebla", "Querétaro"],
        CiudadesNo: ["Monterrey", "Toluca"],
        whatsapp: "+0123456789",
        redes: ["Facebook: Laura Martínez", "Instagram: @lauram"],
        dias: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
        horarios: ["11:00", "15:00", "19:00", "23:00"],
        masageType: ["Masaje deportivo"],
        text1: "Especialista en masajes deportivos para mejorar el rendimiento y prevenir lesiones.",
        text2: "Mis sesiones están diseñadas para adaptarse a las necesidades específicas de cada cliente.",
        text3: "¡Reserva una cita conmigo y experimenta los beneficios de un masaje deportivo profesional!",
        img0: `./NAI/18/img0.jpg`,
        img1: `./NAI/18/img1.jpg`,
        img2: `./NAI/18/img2.jpg`,
        img3: `./NAI/18/img3.jpg`,
        img4: `./NAI/18/img4.jpg`,
        img5: `./NAI/18/img5.jpg`
    },
    // Terapeuta 19
    {
        ID: 19,
        nai: 19,
        tags: ["masaje sueco", "femenino", "ciudad de méxico"],
        Nombre: "Paula Gómez",
        Genero: "Femenino",
        Ubicacion: "Ciudad de México",
        CiudadesYes: ["Ciudad de México", "Puebla", "Toluca"],
        CiudadesNo: ["Guadalajara", "Monterrey"],
        whatsapp: "+3456789012",
        redes: ["Twitter: @paulag", "Instagram: @paulag"],
        dias: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
        horarios: ["09:00", "13:00", "17:00", "21:00"],
        masageType: ["Masaje sueco"],
        text1: "Especialista en masajes suecos para aliviar el estrés y la tensión muscular.",
        text2: "Mis técnicas de masaje están diseñadas para proporcionar una experiencia de relajación profunda.",
        text3: "¡Contáctame para reservar una cita y disfrutar de un momento de bienestar y relajación!",
        img0: `./NAI/19/img0.jpg`,
        img1: `./NAI/19/img1.jpg`,
        img2: `./NAI/19/img2.jpg`,
        img3: `./NAI/19/img3.jpg`,
        img4: `./NAI/19/img4.jpg`,
        img5: `./NAI/19/img5.jpg`
    },
    // Terapeuta 20
    {
        ID: 20,
        nai: 20,
        tags: ["masaje terapéutico", "masculino", "ciudad de méxico"],
        Nombre: "Carlos Pérez",
        Genero: "Masculino",
        Ubicacion: "Ciudad de México",
        CiudadesYes: ["Ciudad de México", "Toluca", "Puebla"],
        CiudadesNo: ["Guadalajara", "Monterrey"],
        whatsapp: "+4567890123",
        redes: ["Facebook: Carlos Pérez", "Instagram: @carlosp"],
        dias: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
        horarios: ["10:00", "14:00", "18:00", "22:00"],
        masageType: ["Masaje terapéutico"],
        text1: "Especialista en masajes terapéuticos para aliviar dolores musculares y mejorar la movilidad.",
        text2: "Mis sesiones están diseñadas para proporcionar alivio y bienestar a mis clientes.",
        text3: "¡Agenda una cita conmigo para experimentar los beneficios de un masaje terapéutico!",
        img0: `./NAI/20/img0.jpg`,
        img1: `./NAI/20/img1.jpg`,
        img2: `./NAI/20/img2.jpg`,
        img3: `./NAI/20/img3.jpg`,
        img4: `./NAI/20/img4.jpg`,
        img5: `./NAI/20/img5.jpg`
    }
];
// Export the data
export default terapeutas;