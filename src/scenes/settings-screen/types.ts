import { StackScreenProps } from '@react-navigation/stack';
import { SettingsStackNavigationParamsType } from '../../store/core/types'


export type SettingsScreenParamProps = StackScreenProps<SettingsStackNavigationParamsType, 'settings'>

export type SettingsScreenState = {}

export type SettingsScreenDispatchProps = { }

export type SettingsScreenProps = SettingsScreenParamProps & SettingsScreenDispatchProps
