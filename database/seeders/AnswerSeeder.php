<?php

namespace Database\Seeders;

use App\Models\Answer;
use Illuminate\Database\Seeder;

class AnswerSeeder extends Seeder
{
    public function run(): void
    {
        $data = [
            ['1923', 0, 1],
            ['1938', 0, 1],
            ['1917', 0, 1],
            ['1914', 1, 1],
            ['France', 0, 2],
            ['Germany', 0, 2],
            ['Austria', 1, 2],
            ['Hungary', 0, 2],
            ['New York', 0, 3],
            ['Austin', 0, 3],
            ['Dallas', 1, 3],
            ['Miami', 0, 3],
            ['Andrew Jackson', 1, 4],
            ['Arthur Wellsley', 0, 4],
            ['Otto von Bismarck', 0, 4],
            ['Napoleon', 0, 4],
            ['Bull Halsey', 0, 5],
            ['George Patton', 0, 5],
            ['Douglas MacArthur', 1, 5],
            ['Omar Bradley', 0, 5],
            ['France', 0, 6],
            ['Austria', 0, 6],
            ['Italy', 0, 6],
            ['England', 1, 6],
            ['Johannes Gutenberg', 1, 7],
            ['Benjamin Franklin', 0, 7],
            ['Sir Isaac Newton', 0, 7],
            ['Martin Luther', 0, 7],
            ['The White Death', 0, 8],
            ['The Black Plague', 0, 8],
            ['Smallpox', 0, 8],
            ['The Bubonic Plague', 1, 8],
            ['Italy and Carthage', 0, 9],
            ['England and Germany', 0, 9],
            ['France and England', 1, 9],
            ['Spain and France', 0, 9],
            ['Martin Luther', 1, 10],
            ['Saint Augustus', 0, 10],
            ['Henry David Thoreau', 0, 10],
            ['Voltaire', 0, 10],
            ['Hannibal', 0, 11],
            ['Julius Caesar', 0, 11],
            ['William the Conqueror', 0, 11],
            ['Attila the Hun', 1, 11],
            ['Henry Repeating Rifle', 0, 12],
            ['Colt Peacemaker', 0, 12],
            ['Winchester Model 1873', 1, 12],
            ['Remington Army Revolver', 0, 12],
            ['Sylvia Plath', 0, 13],
            ['Virginia Woolf', 0, 13],
            ['John Steinbeck', 0, 13],
            ['William Shakespeare', 1, 13],
            ['The Three Musketeers', 0, 14],
            ['The Bible', 1, 14],
            ['Quotations from Chairman Mao Tse-tung', 0, 14],
            ['Quran', 0, 14],
            ['Barley glass', 0, 15],
            ['Sugar cup', 1, 15],
            ['Synthetic glass', 0, 15],
            ['Vinegar glass', 0, 15],
            ['Windmill', 0, 16],
            ['Hospital', 0, 16],
            ['Asylum', 1, 16],
            ['Hotel', 0, 16],
            ['Franz Liszt', 0, 17],
            ['Richard Wagner', 0, 17],
            ['Frédéric Chopin', 1, 17],
            ['Antonín Dvorak', 0, 17],
            ['Marilyn Monroe', 0, 18],
            ['Lady Gaga', 1, 18],
            ['Alicia Keys', 0, 18],
            ['Lana Del Rey', 0, 18],
            ['Pierre-Auguste Renoir', 1, 19],
            ['Pablo Picasso', 0, 19],
            ['Claude Monet', 0, 19],
            ['Miguel Ângelo', 0, 19],
            ['Meisje met de parel', 0, 20],
            ['Whistler\'s Mother', 0, 20],
            ['The Princesse de Broglie', 0, 20],
            ['Mona Lisa', 1, 20],
            ['"Philadelphia" and "Forrest Gump"', 1, 21],
            ['"Philadelphia" and "Salving Private Ryan"', 0, 21],
            ['"Salving Private Ryan" and "Cast Away"', 0, 21],
            ['"Cast Away" and "Forrest Gump"', 0, 21],
            ['Charlize Theron', 0, 22],
            ['Nicole Kidman', 0, 22],
            ['Angelina Jolie', 1, 22],
            ['Cameron Diaz', 0, 22],
            ['The Beatles', 0, 23],
            ['Madonna', 0, 23],
            ['Elvis Presley', 1, 23],
            ['Ed Sheeran', 0, 23],
            ['Baby One More Time', 1, 24],
            ['Toxic', 0, 24],
            ['Lucky', 0, 24],
            ['Born to Make You Happy', 0, 24],
            ['K2', 0, 25],
            ['Mount Everest', 1, 25],
            ['Mount Fuji', 0, 25],
            ['Kilimanjaro', 0, 25],
            ['184', 0, 26],
            ['10363', 0, 26],
            ['5290', 0, 26],
            ['7641', 1, 26],
            ['South Africa', 1, 27],
            ['Slovenia', 0, 27],
            ['Vietnam', 0, 27],
            ['Curaçao', 0, 27],
            ['Egypt', 0, 28],
            ['Mexico', 1, 28],
            ['Guatemala', 0, 28],
            ['Turkey', 0, 28],
            ['Hosted the first US Marshall Service', 0, 29],
            ['In honor of a famous Marshall', 0, 29],
            ['Due to the outline of the islands in the form of a great star', 0, 29],
            ['Were named after British explorer John Marshall', 1, 29],
            ['Tugela falls', 1, 30],
            ['Browne falls', 0, 30],
            ['Yosemite falls', 0, 30],
            ['James Bruce falls', 0, 30],
            ['Salvador', 0, 31],
            ['Rio de Janeiro', 1, 31],
            ['Brasília', 0, 31],
            ['São Paulo', 0, 31],
            ['Sydney', 0, 32],
            ['Melbourne', 0, 32],
            ['Adelaide', 0, 32],
            ['Camberra', 1, 32],
            ['Vatican', 1, 33],
            ['Monaco', 0, 33],
            ['Nauru', 0, 33],
            ['Tuvalu', 0, 33],
            ['Green Lantern', 0, 34],
            ['Batman', 1, 34],
            ['Wolverine', 0, 34],
            ['Spiderman', 0, 34],
            ['Madagascar', 0, 35],
            ['Zimbabwe', 1, 35],
            ['Kenya', 0, 35],
            ['Rwanda', 0, 35],
            ['California', 0, 36],
            ['Texas', 0, 36],
            ['Alaska', 1, 36],
            ['Washington', 0, 36],
            ['Eyelids', 1, 37],
            ['Feet soles', 0, 37],
            ['Hands', 0, 37],
            ['Arms', 0, 37],
            ['Dichloromethane', 0, 38],
            ['Acetone', 1, 38],
            ['Formalin', 0, 38],
            ['Butanol', 0, 38],
            ['Throat', 1, 39],
            ['Intestine', 0, 39],
            ['Ear', 0, 39],
            ['Eye', 0, 39],
            ['28', 0, 40],
            ['32', 1, 40],
            ['38', 0, 40],
            ['40', 0, 40],
            ['Giraffe', 0, 41],
            ['Elephant', 1, 41],
            ['Bison', 0, 41],
            ['Camel', 0, 41],
            ['Jellyfish', 0, 42],
            ['Blue whale', 0, 42],
            ['Octopus', 1, 42],
            ['Hippopotamus', 0, 42],
            ['Marie Curie', 1, 43],
            ['Sigrid Undset', 0, 43],
            ['Lorne Schindler', 0, 43],
            ['Irene Hemmingway', 0, 43],
            ['Foot', 0, 44],
            ['Hand', 0, 44],
            ['Chest', 0, 44],
            ['Ear', 1, 44],
            ['Luminous spots that we see when rubbing our eyes closed', 1, 45],
            ['A lung disease', 0, 45],
            ['An additive to increase the carbonation of a drink', 0, 45],
            ['Small openings in the solar ring', 0, 45],
            ['Trema Orientalis', 0, 46],
            ['Carpobrotus Chilensis', 0, 46],
            ['Acer Buergerianum', 0, 46],
            ['Gingko Biloba', 1, 46],
            ['Oxytocin', 0, 47],
            ['Insulin', 1, 47],
            ['Adrenaline', 0, 47],
            ['Epinephrine', 0, 47],
            ['Octopus', 0, 48],
            ['Seahorse', 1, 48],
            ['Jellyfish', 0, 48],
            ['Hermit Crab', 0, 48],
            ['1986', 1, 49],
            ['1967', 0, 49],
            ['1978', 0, 49],
            ['1990', 0, 49],
            ['90', 0, 50],
            ['80', 1, 50],
            ['70', 0, 50],
            ['60', 0, 50],
            ['Greece', 1, 51],
            ['Italy', 0, 51],
            ['France', 0, 51],
            ['China', 0, 51],
            ['3', 0, 52],
            ['1', 0, 52],
            ['5', 1, 52],
            ['6', 0, 52],
            ['Lance Armstrong', 0, 53],
            ['Bernard Hinault', 0, 53],
            ['Fausto Coppi', 0, 53],
            ['Eddy Merckx', 1, 53],
            ['Italy', 0, 54],
            ['Belgium', 0, 54],
            ['Brazil', 1, 54],
            ['Germany', 0, 54],
            ['Santiago Barnabéu', 0, 55],
            ['La Cartuja', 0, 55],
            ['RCDE Stadium', 0, 55],
            ['Camp Nou', 1, 55],
            ['Yoga', 0, 56],
            ['Pilates', 1, 56],
            ['Crossfit', 0, 56],
            ['Parkour', 0, 56],
            ['9', 0, 57],
            ['10', 0, 57],
            ['7', 1, 57],
            ['5', 0, 57],
            ['Judo', 0, 58],
            ['Sumo Wrestling', 1, 58],
            ['Karate', 0, 58],
            ['Akido', 0, 58],
            ['Ferrrari', 0, 59],
            ['HRT [Hispania Racing Team]', 0, 59],
            ['Renault', 1, 59],
            ['Lotus', 0, 59],
            ['Mark Selby', 0, 60],
            ['Ronnie O\'Sullivan', 1, 60],
            ['Judd Trump', 0, 60],
            ['Neil Robertson', 0, 60]
        ];

        foreach ($data as $row) {
            Answer::create([
                'answer_text' => $row[0],
                'answer_is_correct' => $row[1],
                'question_id' => $row[2],
            ]);
        }
    }
}
