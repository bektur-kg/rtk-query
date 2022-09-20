import {useGetGoodsQuery, useRegisterMutation} from "./store/api/goodsApi";

function App() {
  const {data, isLoading} = useGetGoodsQuery()
  const [register, registerData] = useRegisterMutation()


  const registerHandler = async () => {
    try {
      await register({username: 'ea1s2112la112s3sfddfea', password: '2305kdseior'}).unwrap().then(res => {
        console.log(res)
      })

      console.log(registerData)
    }catch (e){
      throw new Error(e.message)
    }
  }

  return (
    <div className="App">
      <ul>
        {
          data?.results.map(item => (
            <li
              key={item.id}
            >{item.name}</li>
          ))
        }
      </ul>

      <button onClick={registerHandler}>Register</button>
    </div>
  )
}

export default App
