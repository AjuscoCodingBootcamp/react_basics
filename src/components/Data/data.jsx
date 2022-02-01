import PostCard from "./PostCard"
import lobo from './../../assets/khale.jpg'

const posts = [
      {author: "Vania", date: "27 de enero de 2022", content: "Hola Mundo, welcome to my house!", picture: "./assets/khale.jpg", title:"Greetings"},
      {author: "Vivek", date: "26 de enero de 2022", content: "Hi everybody! is a great day today", picture: "./assets/khale.jpg", title:"Saludos"},
      {author: "Khale", date: "25 de enero de 2022", content: "Wof! grrrr grrrr", picture: "./assets/khale.jpg", title:"guau"}
]

const Data = () => {
      return (
            posts.map(post => (
                  <div key={post.author}>
                        <PostCard author={post.author} title={post.title} content={post.content} date={post.date} img={lobo}/>
                  </div>
            ))
      )
}
export {Data}