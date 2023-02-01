export default {
  lang: 'tr',
  title: 'Kodlamaya Başlangıç',
  description: 'Python\'la Yeni Başlayanlar için Bilgisayar Programcılığı',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      {
        text: "Tanış",
        items: [
          {
            text: "Nedir",
            link: "/01_tanis/01_nedir.md"
          },
          {
            text: "Dökümanlar",
            link: "/01_tanis/02_dokumanlar.md"
          },
          {
            text: "Araçlar",
            link: "/01_tanis/03_araclar.md"
          },
        ],
      },
      {
        text: "Gramer",
        items: [
          {
            text: "Cümle Yapısı",
            link: "/02_gramer/01_cumle-yapisi"
          },
          {
            text: "Kelimeler",
            link: "/02_gramer/02_kelimeler"
          },
          {
            text: "Dilin Parçaları",
            link: "/02_gramer/03_dilin-parcalari"
          },
        ],
      },

    ],
    outlineTitle: 'Bu sayfada'
  
  }
}