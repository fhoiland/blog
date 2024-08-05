---
title: "Kontroll av 5V Inngang med Arduino og Rele"
excerpt: "Ornare cum cursus laoreet sagittis nunc fusce posuere per euismod dis vehicula a, semper fames lacus maecenas dictumst pulvinar neque enim non potenti. Torquent hac sociosqu eleifend potenti."
publishDate: "2024-07-05T11:39:36.050Z"
image: "../public/arduino-rele.webp"
category: "technology"
author: "fredrik-høiland"
tags: [arduino, alarm]
---

# Kontroll av 5V Inngang med Arduino og Rele


Arduino er et kraftig verktøy for å kontrollere og overvåke elektriske enheter. Her viser vi hvordan du enkelt kan bruke en Arduino til å kontrollere en 5V inngang ved hjelp av et eksternt relé. Dette gir deg muligheten til å bryte en krets og endre tilstanden til en enhet ved hjelp av Arduino-programvare.

## Programvaren

Først må vi lage Arduino-programvaren. Dette er koden som vil kjøre på Arduino-enheten og kontrollere reléet. Programmet er enkelt og bruker Arduino IoT Cloud for å overvåke en digital inngang på pin 0 og oppdatere en variabel som heter `feil` basert på inngangsspenningen. Her er koden:

```js
// Inkluderer nødvendige biblioteker
#include "thingProperties.h"

void setup() {
  // Initialiser seriel tilkobling
  Serial.begin(9600);
  delay(1500); 

  // Konfigurer pin 0 som en digital inngang
  pinMode(0, INPUT);

  // Initialiser IoT Cloud-tilkoblingen
  initProperties();
  ArduinoCloud.begin(ArduinoIoTPreferredConnection);
  setDebugMessageLevel(2);
  ArduinoCloud.printDebugInfo();
}

void loop() {
  ArduinoCloud.update();
  int inputVoltage = digitalRead(0);
  feil = (inputVoltage == HIGH);
  onFeilChange();
}

void onFeilChange() {
  if (feil) {
    digitalWrite(LED_BUILTIN, HIGH);
    digitalWrite(0, HIGH);
  } else {
    digitalWrite(LED_BUILTIN, LOW);
    digitalWrite(0, LOW);
  }
}

```


Dette programmet overvåker inngangsspenningen på pin 0 og oppdaterer `feil`-variabelen i henhold til inngangsspenningen.

## Hardware-tilkobling

Nå må vi koble reléet til Arduino-enheten. Her er trinnene:

1. Koble reléets NO (Normalt Åpen) kontakt til Arduino-pin 0.
2. Koble reléets COM (Common) kontakt til jord (GND) på Arduino.
3. Koble ekstern 5V strømkilde (+) til reléets +V (5V) inngang.
4. Koble ekstern 5V strømkilde (-) til reléets GND (jord) inngang.

Dette oppsettet gjør det mulig for Arduino å kontrollere tilstanden til reléet, som igjen kontrollerer 5V-inngangen.


Med denne enkle tilkoblingen kan du nå kontrollere enheter som bruker 5V inngangsspenning ved hjelp av Arduino-programvaren din. Du kan enkelt tilpasse programmet for å håndtere ulike scenarier og automatiseringer.

Vi håper dette innlegget har hjulpet deg med å forstå hvordan du kan bruke Arduino og et relé for å kontrollere en 5V inngang. Lykke til med dine prosjekter!

---

