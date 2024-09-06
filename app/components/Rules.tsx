import React from "react";

const FestivalRules: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 p-6 md:p-10 lg:p-14 max-w-4xl mx-auto rounded-lg shadow-md my-8">
      <h1
        className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6"
        id="regeln"
      >
        Festival Regeln für Ackern
      </h1>
      <ul className="space-y-4">
        <li>
          <h2 className="text-xl font-semibold mb-2">
            1. Respekt für die Umgebung:
          </h2>
          <p>
            Behandelt den Hof und die umliegende Natur mit Respekt. Müll gehört
            in die vorgesehenen Behälter. Vermeidet das Betreten von Feldern
            oder privaten Bereichen.
          </p>
        </li>
        <li>
          <h2 className="text-xl font-semibold mb-2">2. Respekt für andere:</h2>
          <p>
            Respektiert andere Gäste und die Anwohner. Keine Belästigungen oder
            Gewalt.
          </p>
        </li>
        <li>
          <h2 className="text-xl font-semibold mb-2">3. Kein offenes Feuer:</h2>
          <p>
            Offenes Feuer ist strengstens verboten. Nutzt die vorgesehenen
            Grill- und Feuerstellen.
          </p>
        </li>
        <li>
          <h2 className="text-xl font-semibold mb-2">4. Drogenkonsum:</h2>
          <p>
            Der Konsum illegaler Substanzen ist nicht erlaubt. Alkohol in Maßen.
          </p>
        </li>
        <li>
          <h2 className="text-xl font-semibold mb-2">5. Notfälle:</h2>
          <p>
            Erste-Hilfe-Stationen befinden sich an ausgewiesenen Stellen. In
            Notfällen wendet euch an das Personal.
          </p>
        </li>
        <li>
          <h2 className="text-xl font-semibold mb-2">
            6. Rücksicht auf die Tiere:
          </h2>
          <p>
            Der Hof ist ein aktiver Landwirtschaftsbetrieb. Achtet darauf, die
            Tiere nicht zu stören.
          </p>
        </li>
        <li>
          <h2 className="text-xl font-semibold mb-2">7. Toiletten:</h2>
          <p>
            Es gibt zwei Trenn-Toiletten. Füllt Sägespäne auf, wenn nötig. Ist
            die Toilette voll, entleert sie oder gebt Bescheid. Pinkeln ist im
            gesamten Wald erlaubt.
          </p>
        </li>
        <li>
          <h2 className="text-xl font-semibold mb-2">8. Ende des Festivals:</h2>
          <p>
            Verlasst das Gelände sauber und respektvoll. Nehmt Rücksicht auf die
            Nachtruhe der Anwohner.
          </p>
        </li>
        <li>
          <h2 className="text-xl font-semibold mb-2">9. Mitbringsel:</h2>
          <p>Kuss für Henrik/Leno und Blumen oder so für Mama </p>
        </li>
      </ul>
    </div>
  );
};

export default FestivalRules;
