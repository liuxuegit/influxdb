// Libraries
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'

// Actions
import {setType} from 'src/timeMachine/actions'

// Components
import OptionsSwitcher from 'src/timeMachine/components/view_options/OptionsSwitcher'
import DapperScrollbars from 'src/shared/components/dapperScrollbars/DapperScrollbars'
import {Grid} from '@influxdata/clockface'

// Utils
import {getActiveTimeMachine} from 'src/timeMachine/selectors'

// Types
import {View, NewView, AppState} from 'src/types'

interface DispatchProps {
  onUpdateType: typeof setType
}

interface StateProps {
  view: View | NewView
}

type Props = DispatchProps & StateProps

class ViewOptions extends PureComponent<Props> {
  public render() {
    return (
      <div className="view-options">
        <DapperScrollbars>
          <div className="view-options--container">
            <Grid>
              <Grid.Row>
                <OptionsSwitcher view={this.props.view} />
              </Grid.Row>
            </Grid>
          </div>
        </DapperScrollbars>
      </div>
    )
  }
}

const mstp = (state: AppState): StateProps => {
  const {view} = getActiveTimeMachine(state)

  return {view}
}

const mdtp: DispatchProps = {
  onUpdateType: setType,
}

export default connect<StateProps, DispatchProps, {}>(
  mstp,
  mdtp
)(ViewOptions)
