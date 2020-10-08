#define TEMP_INPUT 0

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);

}

void loop() {
  // put your main code here, to run repeatedly:
  int value = analogRead(TEMP_INPUT);
  Serial.print("AA05, value = ");
  Serial.print(value);
  Serial.print(" : ");

  float voltage = value * 5.0 * 1000;
  voltage /= 1023.0;

  Serial.print(voltage);
  Serial.print(" mV, ");

  float temperatureC = (voltage - 500) / 10;
  Serial.print(temperatureC);
  Serial.println(" degrees C");

  delay(100);

}
