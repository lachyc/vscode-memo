const serbianAlphabetCyrillic = 'АаБбВвГгДдЂђЕеЖжЗзИиЈјКкЛлЉљМмНнЊњОоПпРрСсТтЋћУуФфХхЦцЧчЏџШш';
const serbianAlphabetLatin = 'AaBbVvGgDdĐđEeŽžZzIiJjKkLlLjljMmNnNjnjOoPpRrSsTtĆćUuFfHhCcČčDždžŠš';

const montenegrinAlphabetCyrillic =
  'АаБбВвГгДдЂђЕеЖжЗзЗ́з́ИиЈјКкЛлЉљМмНнЊњОоПпРрСсТтЋћУуФфХхЦцЧчЏџШшС́с́';
const montenegrinAlphabetLatin =
  'AaBbVvGgDdĐđEeŽžZzŹźIiJjKkLlLjljMmNnNjnjOoPpRrSsTtĆćUuFfHhCcČčDždžŠšŚś';

const macedonianAlphabetCyrillic = 'АаБбВвГгДдЃѓЕеЖжЗзЅѕИиЈјКкЛлЉљМмНнЊњОоПпРрСсТтЌќУуФфХхЦцЧчЏџШш';
const macedonianAlphabetLatin =
  'AaBbVvGgDdǴǵEeŽžZzDzdzIiJjKkLlLjljMmNnNjnjOoPpRrSsTtḰḱUuFfHhCcČčDždžŠš';

const russianAlphabetCyrillic =
  'АаБбВвГгДдЕеЁёЖжЗзИиЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщЪъЫыЬьЭэЮюЯя';

const tajikAlphabetCyrillic = 'АаБбВвГгҒғДдЕеЁёЖжЗзИиӢӣЙйКкЛлМмНнОоПпРрСсТтУуӮӯФфХхҲҳЧчҶҷШшъЭэЮюЯя';
const tajikAlphabetLatin = 'AaBbVvGgǦǧDdEeËëŽžZzIiĪīJjKkLlMmNnOoPpRrSsTtUuŪūFfHhḨḩČčÇçŠš’ÈèÛûÂâ';

const specialChars =
  '‘’‚“”„†‡‰‹›♠♣♥♦‾←↑→↓™!"#$%&\'()*+,-./ :;<=>?@[\\]^_`{|}~…–—¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿×';

const diacriticChars = 'ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝàáâãäåæçèéêëìíîïðñòóôõöøùúûüý';

const numericalChars = '1234567890';

const alphabetChars = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';

const mixCharactersSomeCyrillic = '!ЉFљñМ мНÈÆнЊњО)*+,оП>пР?р';
const mixCharactersAllLatin = '!LjFljñM mNÈÆnNjnjO)*+,oP>pR?r';

const mixCharactersSomeCyrillicNoAlpha = "'Ћ<=>?ћУуФфХхЦцЧчЏ%4џШ12ш♥";
const mixCharactersAllLatinNoAlpha = "'Ć<=>?ćUuFfHhCcČčDž%4džŠ12š♥";

const triggerCharacters = Array.from(
  new Set(
    (
      serbianAlphabetCyrillic +
      serbianAlphabetLatin +
      montenegrinAlphabetCyrillic +
      montenegrinAlphabetLatin +
      macedonianAlphabetCyrillic +
      macedonianAlphabetLatin +
      russianAlphabetCyrillic +
      tajikAlphabetCyrillic +
      tajikAlphabetLatin +
      specialChars +
      diacriticChars +
      numericalChars +
      alphabetChars +
      mixCharactersSomeCyrillic +
      mixCharactersAllLatin +
      mixCharactersSomeCyrillicNoAlpha +
      mixCharactersAllLatinNoAlpha
    ).split(''),
  ),
);

export default triggerCharacters;
