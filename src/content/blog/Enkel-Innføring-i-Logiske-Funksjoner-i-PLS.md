---
title: "Enkel Innføring i Logiske Funksjoner i PLS"
excerpt: "En oversikt over grunnleggende logiske funksjoner i PLS-programmering, inkludert NOT, AND, NAND, OR, NOR, og XOR."
publishDate: "2024-08-09T11:39:36.050Z"
image: "./src/assets/authors/blog/PLS.webp"
category: "technology"
author: "fredrik-høiland"
tags: ["PLS", "logiske funksjoner", "programmering", "automatisering"]
---

Her kommer en liten blogg om hvordan logiske funksjoner virker i en PLS (Programmerbar Logisk Styring). Jeg lager dette blogginnlegget som et oppslagsverk i tilfelle jeg en gang skulle glemme hvordan de logiske funksjonene i en PLS fungerer. Jeg skriver også dette innlegget for å lære mer om programmering med PLS-er.

## Vi starter med NOT-funksjonen:

### NOT-funksjonen:

NOT fungerer motsatt av hva du har på inngangssignalet.

| Innganger | Utganger |
|-----------|----------|
| 0         | 1        |
| 1         | 0        |

### AND-funksjonen:

AND fungerer slik at begge inngangene må være aktive for at utgangen skal være 1. I alle andre tilfeller er utgangen 0.

| Inngang 1 | Inngang 2 | Utgang |
|-----------|-----------|--------|
| 0         | 0         | 0      |
| 1         | 0         | 0      |
| 0         | 1         | 0      |
| 1         | 1         | 1      |

### NAND-funksjonen:

NAND fungerer på den måten at den oppfører seg som en AND-funksjon, men med en NOT-funksjon etterpå. Det vil si at bare når begge inngangene er aktive, vil utgangen være 0. Ellers er den alltid 1.

| Inngang 1 | Inngang 2 | Utgang |
|-----------|-----------|--------|
| 0         | 0         | 1      |
| 1         | 0         | 1      |
| 0         | 1         | 1      |
| 1         | 1         | 0      |

### OR-funksjonen:

OR-funksjonen fungerer slik at så lenge én av inngangene er aktiv, er utgangen 1.

| Inngang 1 | Inngang 2 | Utgang |
|-----------|-----------|--------|
| 0         | 0         | 0      |
| 1         | 0         | 1      |
| 0         | 1         | 1      |
| 1         | 1         | 1      |

### NOR-funksjonen:

På samme måte som med NAND-funksjonen, der vi først hadde en AND-funksjon etterfulgt av en NOT-funksjon, kan NOR sees på som en OR-funksjon etterfulgt av en NOT-funksjon.

| Inngang 1 | Inngang 2 | Utgang |
|-----------|-----------|--------|
| 0         | 0         | 1      |
| 1         | 0         | 0      |
| 0         | 1         | 0      |
| 1         | 1         | 0      |

### XOR-funksjonen:

Med en OR-funksjon, hvis begge inngangene er 1, vil utgangen være 1. Men med XOR vil utgangen være 0 hvis begge inngangene er 1. XOR skiller seg fra OR ved at utgangen er 1 kun når én av inngangene er 1, men ikke begge.

| Inngang 1 | Inngang 2 | Utgang |
|-----------|-----------|--------|
| 0         | 0         | 0      |
| 1         | 0         | 1      |
| 0         | 1         | 1      |
| 1         | 1         | 0      |
