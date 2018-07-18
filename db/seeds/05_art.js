const TABLE_NAME = 'art'
const SHORTID = require('shortid')

exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).del()
    .then(() => {
      return knex(TABLE_NAME).insert([
        {id: 1, art_shortid: SHORTID.generate(), gallery_id: 2, art_title: "art1", art_text: "Art Text", art_picture_url: 'http://www.placekitten.com/500/500'},
        {id: 2, art_shortid: SHORTID.generate(), gallery_id: 2, art_title: "art2", art_text: "Art Text", art_picture_url: 'http://www.placekitten.com/510/510'},
        {id: 3, art_shortid: SHORTID.generate(), gallery_id: 2, art_title: "art3", art_text: "Art Text", art_picture_url: 'http://www.placekitten.com/500/510'},
        {id: 4, art_shortid: SHORTID.generate(), gallery_id: 2, art_title: "art4", art_text: "Art Text", art_picture_url: 'http://www.placekitten.com/510/500'},
        {id: 5, art_shortid: SHORTID.generate(), gallery_id: 2, art_title: "art5", art_text: "Art Text", art_picture_url: 'http://www.placekitten.com/520/500'},
        {id: 6, art_shortid: SHORTID.generate(), gallery_id: 2, art_title: "art6", art_text: "Art Text", art_picture_url: 'http://www.placekitten.com/510/520'},
        {id: 7, art_shortid: SHORTID.generate(), gallery_id: 3, art_title: "art7", art_text: "Art Text", art_picture_url: 'http://www.placekitten.com/520/520'},
        {id: 8, art_shortid: SHORTID.generate(), gallery_id: 3, art_title: "art8", art_text: "Art Text", art_picture_url: 'http://www.placekitten.com/500/520'},
        {id: 9, art_shortid: SHORTID.generate(), gallery_id: 4, art_title: "art9", art_text: "Art Text", art_picture_url: 'http://www.placekitten.com/530/530'},
        {id: 10, art_shortid: SHORTID.generate(), gallery_id: 4, art_title: "art10", art_text: "Art Text", art_picture_url: 'http://www.placekitten.com/530/520'},
        {id: 11, art_shortid: SHORTID.generate(), gallery_id: 4, art_title: "art11", art_text: "Art Text", art_picture_url: 'http://www.placekitten.com/530/510'},
        {id: 12, art_shortid: SHORTID.generate(), gallery_id: 4, art_title: "art12", art_text: "Art Text", art_picture_url: 'http://www.placekitten.com/500/530'},
        {id: 13, art_shortid: SHORTID.generate(), gallery_id: 1,
            art_title: "Sunflowers",
            art_info: 'oil on canvas, 95 cm x 73 cm \n Credits (obliged to state): Van Gogh Museum, Amsterdam (Vincent van Gogh Foundation)',
            art_flavor: 'Vincent van Gogh (1853 - 1890), Arles, January 1889',
            art_text: `Van Gogh’s paintings of Sunflowers are among his most famous. He did them in Arles, in the south of France, in 1888 and 1889. Vincent painted a total of five large canvases with sunflowers in a vase, with three shades of yellow ‘and nothing else’. In this way, he demonstrated that it was possible to create an image with numerous variations of a single colour, without any loss of eloquence. \n\n The sunflower paintings had a special significance for Van Gogh: they communicated ‘gratitude’, he wrote. He hung the first two in the room of his friend, the painter Paul Gauguin, who came to live with him for a while in the Yellow House. Gauguin was impressed by the sunflowers, which he thought were ‘completely Vincent’. Van Gogh had already painted a new version during his friend’s stay and Gauguin later asked for one as a gift, which Vincent was reluctant to give him. He later produced two loose copies, however, one of which is now in the Van Gogh Museum.`,
            art_picture_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Vincent_Willem_van_Gogh_127.jpg/450px-Vincent_Willem_van_Gogh_127.jpg',
            art_audio: 'https://s3-us-west-2.amazonaws.com/galvanize-van-gogh-audio-files/Sunflowers.mp3'},
        {id: 14, art_shortid: SHORTID.generate(), gallery_id: 1,
          art_title: "The Potato Eaters",
          art_info: 'oil on canvas, 82 cm x 114 cm \n Credits (obliged to state): Van Gogh Museum, Amsterdam (Vincent van Gogh Foundation)',
          art_flavor: 'Vincent van Gogh (1853 - 1890), Nuenen, April-May 1885',
          art_text: "Van Gogh saw the Potato Eaters as a showpiece, for which he deliberately chose a difficult composition to prove he was on his way to becoming a good figure painter. The painting had to depict the harsh reality of country life, so he gave the peasants coarse faces and bony, working hands. He wanted to show in this way that they ‘have tilled the earth themselves with these hands they are putting in the dish ... that they have thus honestly earned their food’. \n\n He painted the five figures in earth colours – ‘something like the colour of a really dusty potato, unpeeled of course’. The message of the painting was more important to Van Gogh than correct anatomy or technical perfection. He was very pleased with the result: yet his painting drew considerable criticism because its colours were so dark and the figures full of mistakes. Nowadays, the Potato Eaters is one of Van Gogh’s most famous works.",
          art_picture_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Van-willem-vincent-gogh-die-kartoffelesser-03850.jpg/2560px-Van-willem-vincent-gogh-die-kartoffelesser-03850.jpg',
          art_audio: 'https://s3-us-west-2.amazonaws.com/galvanize-van-gogh-audio-files/The+Potato+Eaters.mp3'},
        {id: 15, art_shortid: SHORTID.generate(), gallery_id: 1,
          art_title: "Self-Portrait as a Painter",
          art_info: 'oil on canvas, 65.1 cm x 50 cm \n Credits (obliged to state): Van Gogh Museum, Amsterdam (Vincent van Gogh Foundation)',
          art_flavor: 'Vincent van Gogh (1853 - 1890), Paris, December 1887-February 1888',
          art_text: "Van Gogh presented himself in this self-portrait as a painter, holding a palette and paintbrushes behind his easel. He showed that he was a modern artist by using a new painting style, with bright, almost unblended colours. The palette contains the complementary colour pairs red/green, yellow/purple and blue/orange – precisely the colours Van Gogh used for this painting. He laid these pairs down side by side to intensify one another: the blue of his smock, for instance, and the orange-red of his beard. \n\n Self-Portrait as a Painter was the last work Van Gogh produced in Paris; the city had exhausted him both mentally and physically. He told his sister Wil how he had portrayed himself: ‘wrinkles in forehead and around the mouth, stiffly wooden, a very red beard, quite unkempt and sad’.",
          art_picture_url: 'https://cdn.radiofrance.fr/s3/cruiser-production/2017/02/c3c4ddd7-7e3f-4e68-ac7b-9665c3538431/738_gettyimages-148278690.jpg',
          art_audio: 'https://s3-us-west-2.amazonaws.com/galvanize-van-gogh-audio-files/Self-Portrait+as+a+Painter.mp3'},
        {id: 16, art_shortid: SHORTID.generate(), gallery_id: 1,
          art_title: "The Yellow House",
          art_info: 'oil on canvas, 72 cm x 91.5 cm \n Credits (obliged to state): Van Gogh Museum, Amsterdam (Vincent van Gogh Foundation)',
          art_flavor: 'Vincent van Gogh (1853 - 1890), Arles, September 1888',
          art_text: "In May 1888, Van Gogh rented four rooms in a house on Place Lamartine in Arles (southern France). The green shutters in this painting of the square show where he lived. Shortly after moving into the ‘Yellow House’, he sent Theo a description and sketch of his painting of it: ‘it’s tremendous, these yellow houses in the sunlight and then the incomparable freshness of the blue.’ \n\n The work, which Van Gogh himself called ‘The Street’, records the artist’s immediate surroundings: he often ate at the restaurant on the left, and the home of his friend, the postman Joseph Roulin, lay just beyond the second railway bridge. \n\n Vincent had finally found a place at the Yellow House where he could not only paint but also have his friends come to stay. His plan was to turn the yellow corner-building into an artists’ house, where like-minded painters could live and work together.",
          art_picture_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Vincent_van_Gogh_-_The_yellow_house_%28%27The_street%27%29.jpg/1920px-Vincent_van_Gogh_-_The_yellow_house_%28%27The_street%27%29.jpg',
          art_audio: 'https://s3-us-west-2.amazonaws.com/galvanize-van-gogh-audio-files/The+Yellow+House.mp3'},
      ])
    })
    .then(() => {
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
}
