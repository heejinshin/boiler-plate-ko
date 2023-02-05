// ndex -> express (백엔드 동작 과정)

const express = require('express') // 익스프레스 모듈을 가져온다 
const app = express()   // 이 펑션을 이용해 새로운 express 앱을 만든다 
const port = 3000 // 백서버 
const bodyParser = require('body-parser');
const { User } = require("./models/User");

//application/x-www-form-urlencoded  (서버에서 )
// body parser 옵션주기 
//body parse5r클라이언트에서 오는 정보를 서버에서 분석해서 가져올 수 있게하는애 
app.use(bodyParser.urlencoded({extended: true}));

//application/json 타입으로 된 것을 분석해서 가져오게함 
app.use(bodyParser.json());


const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://heejinshin:abcd1234@boilerplate.6xrm8nv.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

// 라우터 생성 

app.get('/', (req, res) =>  // 루트디렉토리 
  res.send('Hello World! 안녕하세요~ test!')     // 브라우저 창에 띄움 

)

app.post('/register', (req, res) => {
  // 회원 가입할 때 필요한 정보들을 client에서 가져오면 
  // 그것들을 데이터 베이스에 넣어준다.   
})

app.listen(port, () =>    // 5천번해서 실행 
  console.log(`Example app listening on port ${port}`)
)
app.post('/register', (req, res) => {

    {
        id:"hello";
        password: "123"
    }
    // 회원 가입 할 때 필요한 정보들을 client에서 가져오면 // 그것들을 데이터 베이스에 넣어준다. 
    const user = new User(req.body)

    user.save((err, userInfo) => {
        if(err) return res.json({success: false, err})
        return res.status(200).json({
            success: true
        })
    })
})

//노드 , express다운, expess를 이용한 간단한 어플리케이션 만들어봄! 