import React, { Component } from 'react'

class Dropdown extends Component{
  constructor(props){
    super(props)
    this.state = {
      listOpen: false,
      headerCode: this.props.titleCode,
      headerFlag: this.props.titleFlag,
    }
    this.close = this.close.bind(this)
  }

  componentDidUpdate(){
    const { listOpen } = this.state
    setTimeout(() => {
      if(listOpen){
        window.addEventListener('click', this.close)
      }
      else{
        window.removeEventListener('click', this.close)
      }
    }, 0)
  }

  componentWillUnmount(){
    window.removeEventListener('click', this.close)
  }

  close(timeOut){
    this.setState({
      listOpen: false
    })
  }

  selectItem(title, id){
    this.setState({
      headerCode: title.dialcode,
      headerFlag: title.iso2,
      listOpen: false
    }, this.props.resetThenSet(id))
  }

  toggleList(){
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

  render(){
    const{list} = this.props
    const{listOpen, headerCode, headerFlag} = this.state
    return(
      <div className="dd-wrapper">
        <div className="dd-header" onClick={() => this.toggleList()}>
        <div className="country-flag-ad">
          <img src={require(`../../common/flags/${headerFlag}.svg`)} alt={headerCode}/>
          </div>
          <span className="country-code">{`+${headerCode}`}</span>
        </div>
        {listOpen && <ul className="dd-list" onClick={e => e.stopPropagation()}>
          {list.map((item)=> (
            <li className="dd-list-item" 
            key={item.id} 
            onClick={() => this.selectItem(item, item.id)}>
            {/* <div className={`country-flag-${item.iso2}`}></div> */}
            <div className="country-flag-ad">
            <img src={require(`../../common/flags/${item.iso2}.svg`)} alt={item.name}/>
            </div>
            <span className="country-name">{item.name}</span>
            <span className="country-name">{`+${item.dialcode}`}</span>
            </li>
          ))}
        </ul>}
      </div>
    )
  }
}

export default Dropdown
