const TABLE_NAME = 'gallery'
const SHORTID = require('shortid')

exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).del()
    .then(() => {
      return knex(TABLE_NAME).insert([
        {id: 1, gallery_shortid: SHORTID.generate(), museum_id: 1, artist_id: 1, gallery_picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/1280px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg", gallery_title: "Permant Collection", gallery_text: "Explore Vincent van Gogh's masterpieces in the permanent collection. See his development as an artist in the museum galleries. Get to know his ideas and ambitions and step into Van Gogh's world."},
        {id: 2, gallery_shortid: SHORTID.generate(), museum_id: 1, artist_id: 1, gallery_picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg", gallery_title: "Van Gogh Dreams", gallery_text: "'Van Gogh Dreams' invites you to join Vincent van Gogh's emotional journey to the South of France. You will see what Vincent saw and feel what he felt during one of the most important periods of his life." },
        {id: 3, gallery_shortid: SHORTID.generate(), museum_id: 2, artist_id: 2, gallery_picture: "https://i.ytimg.com/vi/jhTOFcLdO0c/maxresdefault.jpg", gallery_title: "MIDDLE FORK", gallery_text: "John Grade’s large-scale sculpture, Middle Fork, echoes the contours of a 140-year-old western hemlock tree located in the Cascade Mountains east of Seattle. "},
        {id: 4, gallery_shortid: SHORTID.generate(), museum_id: 2, artist_id: 2, gallery_picture: "http://doubleexposure.site.seattleartmuseum.org/wp-content/uploads/sites/22/2016/10/mn-seam-2.jpg", gallery_title: "Double Exposure", gallery_text: "Edward S. Curtis, Marianne Nicolson, Tracy Rector, Will Wilson features 150 images by a historic photographer, alongside immersive experiences from three contemporary artists. "},
      ])
    })
    .then(() => {
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
}
