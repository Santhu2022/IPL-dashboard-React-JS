import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const upDatedData = {
    umpires: latestMatchDetails.umpires,
    result: latestMatchDetails.result,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    date: latestMatchDetails.date,
    id: latestMatchDetails.id,
    venue: latestMatchDetails.venue,
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    firstInnings: latestMatchDetails.first_innings,
    secondInnings: latestMatchDetails.second_innings,
    matchStatus: latestMatchDetails.match_status,
  }
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = upDatedData
  return (
    <div className="latest-matches">
      <div className="match-info-logo-container">
        <div className="match-info-container">
          <p className="competing-team">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue-result-style">{venue}</p>
          <p className="venue-result-style">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing-team-logo"
        />
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="competing-team-logo-lg"
      />
      <hr className="separator" />
      <div className="innings-section">
        <p className="innings-section-headings">First Innings</p>
        <p>{firstInnings}</p>
        <p className="innings-section-headings">Second Innings</p>
        <p>{secondInnings}</p>
        <p className="innings-section-headings">Man of The Match</p>
        <p>{manOfTheMatch}</p>
        <p className="innings-section-headings">Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
