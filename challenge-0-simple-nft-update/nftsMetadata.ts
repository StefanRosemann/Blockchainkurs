const nftsMetadata = [
      {
      description: "VIN: WBAVB71070VA36703TER4 Der BMW 3er ist eine sportliche Limousine mit beeindruckender Technologie.",
      external_url: "https://www.bmw.de/de/neufahrzeuge/3er.html", // Beispiel-Link zur Modellseite
      image: "https://cdn.pixabay.com/photo/2016/10/04/05/17/stance-1713598_1280.jpg",
      name: "BMW 3er",
      attributes: [
        {
          trait_type: "Farbe",
          value: "Weiß",
        },
        {
          trait_type: "PS",
          value: "350 PS",
        },
        {
          trait_type: "0-100",
          value: "6 s",
        },
      ],
    },
    {
      description: "VIN: WBAVB71070VA3670312H Der BMW M4 kombiniert kraftvolle Performance mit dynamischem Design,",
      external_url: "https://www.bmw.de/de/neufahrzeuge/2er.html", // Beispiel-Link zur Modellseite
      image: "https://cdn.pixabay.com/photo/2021/07/21/18/32/car-6483720_1280.jpg",
      name: "BMW M4",
      attributes: [
        {
          trait_type: "Farbe",
          value: "Blau",
        },
        {
          trait_type: "PS",
          value: "250 PS",
        },
        {
          trait_type: "0-100",
          value: "7 s",
        },
      ],
    },
    {
      description: "VIN: WBAVB71070VA367031255 Ein SUV mit kraftvoller Performance und modernsten Technologien.",
      external_url: "https://www.bmw.de/de/neufahrzeuge/x5.html", // Beispiel-Link zur Modellseite
      image: "https://cdn.pixabay.com/photo/2016/02/22/20/22/bmw-1216469_1280.jpg",
      name: "BMW X5",
      attributes: [
        {
          trait_type: "Farbe",
          value: "Silber",
        },
        {
          trait_type: "PS",
          value: "420 PS",
        },
        {
          trait_type: "0-100",
          value: "6 s",
        },
      ],
    },
    {
      description: "VIN: WCVVB71070VA36703TG43 Ein zukunftsweisender Hybrid-Sportwagen, der Leistung mit Nachhaltigkeit kombiniert.",
      external_url: "https://www.bmw.de/de/neufahrzeuge/i8.html", // Beispiel-Link zur Modellseite
      image: "https://cdn.pixabay.com/photo/2021/10/13/13/19/bmw-6706660_1280.jpg",
      name: "BMW i8",
      attributes: [
        {
          trait_type: "Farbe",
          value: "Black",
        },
        {
          trait_type: "PS",
          value: "370 PS",
        },
        {
          trait_type: "0-100",
          value: "4 s",
        },
      ],
    },
    {
      description: "VIN: HHGVB71070VA36703/8GH Ein elegantes Cabrio für Fahrspaß unter freiem Himmel und sportlichem Handling.",
      external_url: "https://www.bmw.de/de/neufahrzeuge/z4.html", // Beispiel-Link zur Modellseite
      image: "https://cdn.pixabay.com/photo/2020/04/09/19/44/bmw-5022856_1280.jpg",
      name: "BMW Z4",
      attributes: [
        {
          trait_type: "Farbe",
          value: "Silber",
        },
        {
          trait_type: "PS",
          value: 340,
        },
        {
          trait_type: "0-100",
          value: "6 s",
        },
      ],
    },
  ];


export type NFTMetaData = (typeof nftsMetadata)[number];

export default nftsMetadata;
