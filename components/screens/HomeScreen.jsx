import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements';

import HeaderHome from '../home/HeaderHome';
import StoriesHome from '../home/StoriesHome';
import PostHome from '../home/PostHome';

const postData = [
    {
        user_id: 2,
        user_image: 'https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg',
        user_name: 'Test User DOS',
        post_caption: "Ques post tan amalon te acabas de aventar",
        post_images: [{ url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU'}, {url:'https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg' }],
        post_coments: [{ user_name: 'usuarioUno', comment: 'esta padrisimo', user_name: 'usuarioDos', comment: 'esta aun mas padrisimo'}]
    },
    {
        user_id: 1,
        user_image: 'https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg',
        user_name: 'Test User UNO',
        post_caption: "Ques post tan amalon te acabas de aventar",
        post_images: [{url:'https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg' }],
        post_coments: [{ user_name: 'usuarioUno', comment: 'esta padrisimo', user_name: 'usuarioDos', comment: 'esta aun mas padrisimo'}]
    },
    {
        user_id: 3,
        user_image: 'https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg',
        user_name: 'Test User TRES',
        post_caption: "Ques post tan amalon te acabas de aventar",
        post_images: [{ url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU'}, {url:'https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg' }],
        post_coments: [{ user_name: 'usuarioUno', comment: 'esta padrisimo', user_name: 'usuarioDos', comment: 'esta aun mas padrisimo'}]
    },
    {
        user_id: 9,
        user_image: 'https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg',
        user_name: 'Test User Nueve',
        post_caption: "Ques post tan amalon te acabas de aventar",
        post_images: [ {url:'https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg' }],
        post_coments: [{ user_name: 'usuarioUno', comment: 'esta padrisimo', user_name: 'usuarioDos', comment: 'esta aun mas padrisimo'}]
    },
    {
        user_id: 5,
        user_image: 'https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg',
        user_name: 'Test User CINCO',
        post_caption: "Ques post tan amalon te acabas de aventar",
        post_images: [{ url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU'}, {url:'https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg' }],
        post_coments: [{ user_name: 'usuarioUno', comment: 'esta padrisimo', user_name: 'usuarioDos', comment: 'esta aun mas padrisimo'}]
    },
    {
        user_id: 6,
        user_image: 'https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg',
        user_name: 'Test User SEIS',
        post_caption: "Ques post tan amalon te acabas de aventar",
        post_images: [{ url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU'}, {url:'https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg' }],
        post_coments: [{ user_name: 'usuarioUno', comment: 'esta padrisimo', user_name: 'usuarioDos', comment: 'esta aun mas padrisimo'}]
    },
    {
        user_id: 7,
        user_image: 'https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg',
        user_name: 'Test User SIETE',
        post_caption: "Ques post tan amalon te acabas de aventar",
        post_images: [{ url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU'}, {url:'https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg' }],
        post_coments: [{ user_name: 'usuarioUno', comment: 'esta padrisimo', user_name: 'usuarioDos', comment: 'esta aun mas padrisimo'}]
    },
    {
        user_id: 8,
        user_image: 'https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg',
        user_name: 'Test User OCHO',
        post_caption: "Ques post tan amalon te acabas de aventar",
        post_images: [{ url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU'}, {url:'https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg' }],
        post_coments: [{ user_name: 'usuarioUno', comment: 'esta padrisimo', user_name: 'usuarioDos', comment: 'esta aun mas padrisimo'}]
    }
]

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderHome />
        <Divider width={1} orientation='vertical'/>
      <StoriesHome />
      <ScrollView>
        {postData.map((post, index) =>(
            <PostHome postState={post}  key={index}/>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
