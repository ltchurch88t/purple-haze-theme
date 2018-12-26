import { NgModule, Injectable } from '@angular/core'
import { Theme } from 'terminus-core'

@Injectable()
class PurpleHazeTheme extends Theme {
    name = 'Purple Haze'
    css = require('./theme.scss')
    terminalBackground = 'linear-gradient(180deg, rgba(89,12,103,1) 0%, rgba(95,45,177,1) 50%, rgba(0,174,255,1) 100%)'
}

@NgModule({
    providers: [
        { provide: Theme, useClass: PurpleHazeTheme, multi: true },
    ],
})
export default class PurpleHazeThemeModule { }
