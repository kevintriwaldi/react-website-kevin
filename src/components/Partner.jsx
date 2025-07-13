import "../styles/Partner.css"
function Partner(props) {
  return (
    <div className="partner-list">
      {props.partnerList.map((item, index) => {
        return (
          <div className="kartu-partner" key={index}>
            <img src={item.image} />
            <p>{item.name} </p>
          </div>
        )
      })}
    </div>
  )
}

export default Partner
