const celsiusInput = document.getElementById('celsius');
        const fahrenheitInput = document.getElementById('fahrenheit');
        const kelvinInput = document.getElementById('kelvin');
        const clearButton = document.getElementById('clearButton');
     


        celsiusInput.addEventListener('input', convertFromCelsius);
        fahrenheitInput.addEventListener('input', convertFromFahrenheit);
        kelvinInput.addEventListener('input', convertFromKelvin);
        clearButton.addEventListener('click', clearAllFields);

        function clearAllFields() {
            celsiusInput.value = '';
            fahrenheitInput.value = '';
            kelvinInput.value = '';
        }

        function convertFromCelsius() {
            // ... your conversion logic ...
              const celsius = parseFloat(celsiusInput.value);
            const fahrenheit = (celsius * 9/5) + 32;
            const kelvin = celsius + 273.15;

            fahrenheitInput.value = isNaN(fahrenheit) ? '' : fahrenheit.toFixed(2);
            kelvinInput.value = isNaN(kelvin) ? '' : kelvin.toFixed(2);
        }

        function convertFromFahrenheit() {
            // ... your conversion logic ...
          const fahrenheit = parseFloat(fahrenheitInput.value);
            const celsius = (fahrenheit - 32) * 5/9;
            const kelvin = (fahrenheit + 459.67) * 5/9;

            celsiusInput.value = isNaN(celsius) ? '' : celsius.toFixed(2);
            kelvinInput.value = isNaN(kelvin) ? '' : kelvin.toFixed(2);
        }

        function convertFromKelvin() {
            // ... your conversion logic ...
           const kelvin = parseFloat(kelvinInput.value);
            const celsius = kelvin - 273.15;
            const fahrenheit = (kelvin * 9/5) - 459.67;

            celsiusInput.value = isNaN(celsius) ? '' : celsius.toFixed(2);
            fahrenheitInput.value = isNaN(fahrenheit) ? '' : fahrenheit.toFixed(2);
        }

 function clearAllFields() {
            celsiusInput.value = '';
            fahrenheitInput.value = '';
            kelvinInput.value = '';
        }