import startCase from 'lodash.startcase'
import PropTypes from 'prop-types'
import React from 'react'

import AgencySearch from './AgencySearch'
import LocationSelect from './LocationSelect'
import { nationalKey } from '../util/usa'

class LocationFilter extends React.Component {
  state = { showResults: false }

  handleLocationFocus = () => {
    this.setState({ showResults: false })
  }

  render() {
    const { agency, agencyData, ariaControls, onChange, usState } = this.props
    const { showResults } = this.state
    const showAgencySearch = usState !== nationalKey && agencyData.length > 0

    return (
      <div id="location" className="mb4">
        <div className="mb3 fs-22 bold border-bottom border-blue-light">
          Location
        </div>
        <LocationSelect
          ariaControls={ariaControls}
          onChange={onChange}
          onFocus={this.handleLocationFocus}
          selected={startCase(usState)}
        />
        {showAgencySearch &&
          <AgencySearch
            onChange={onChange}
            agency={(agency || {}).agency_name || ''}
            data={agencyData}
            initialShowResults={showResults}
          />}
      </div>
    )
  }
}

LocationFilter.defaultProps = {
  usState: nationalKey,
}

LocationFilter.propTypes = {
  agency: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
  agencyData: PropTypes.arrayOf(PropTypes.object),
  ariaControls: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  usState: PropTypes.string.isRequired,
}

export default LocationFilter
