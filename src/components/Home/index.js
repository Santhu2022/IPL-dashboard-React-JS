import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

const IPL_LOGO = 'https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png'

class Home extends Component {
  state = {teamslist: [], isLoading: true}

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedTeamsList = teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({teamslist: updatedTeamsList, isLoading: false})
  }

  renderTeamsList = () => {
    const {teamslist} = this.state
    return (
      <ul className="teams-list">
        {teamslist.map(eachTeam => (
          <TeamCard key={eachTeam.id} teamDetails={eachTeam} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="home-container">
        <div className="home-logo-heading-container">
          <img src={IPL_LOGO} className="ipl-logo" alt="ipl logo" />
          <h1 className="home-page-heading">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamsList()
        )}
      </div>
    )
  }
}

export default Home
