import React from 'react';
/* import { Link, withRouter } from 'react-router-dom'; */
//import { connect } from 'react-redux';

//import { userActions, alertActions } from '../script/redux';
import {
    BallBeat, BallClipRotate, BallClipRotateMultiple, BallClipRotatePulse, BallGridBeat, BallGridPulse, BallPulse, BallPulseRise,
    BallPulseRound,
    BallPulseSync,
    BallRotate,
    BallScale,
    BallScaleMultiple,
    BallScaleRandom,
    BallScaleRipple,
    BallScaleRippleMultiple,
    BallSpinFadeLoader,
    BallSpinLoader,
    BallTrianglePath,
    BallZigZag,
    BallZigZagDeflect,
    LineScale,
    LineScaleParty,
    LineScalePulseOut,
    LineScalePulseOutRapid, LineScaleRandom,
    LineSpinFadeLoader,
    CubeTransition,
    Pacman,
    SemiCircleSpin,
    SquareSpin,
    TriangleSkewSpin



} from 'react-pure-loaders';

export class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            data: [BallBeat, BallClipRotate, BallClipRotateMultiple, BallClipRotatePulse, BallGridBeat, BallGridPulse, BallPulse, BallPulseRise, BallPulseRound,
                BallPulseSync,
                BallRotate,
                BallScale,
                BallScaleMultiple,
                BallScaleRandom,
                BallScaleRipple,
                BallScaleRippleMultiple,
                BallSpinFadeLoader,
                BallSpinLoader,
                BallTrianglePath,
                BallZigZag,
                BallZigZagDeflect,
                LineScale,
                LineScaleParty,
                LineScalePulseOut,
                LineScalePulseOutRapid, LineScaleRandom,
                LineSpinFadeLoader,
                CubeTransition,
                Pacman,
                SemiCircleSpin,
                SquareSpin,
                TriangleSkewSpin]
        };
       
    }

    


    render() {
       
        const TagName =[BallBeat,
            BallClipRotate,
            BallClipRotateMultiple,
            BallClipRotatePulse, 
            BallGridBeat, 
            BallGridPulse, 
            BallPulse, 
            BallPulseRise, 
            BallPulseRound,
            BallPulseSync,
            BallRotate,
            BallScale,
            BallScaleMultiple,
            BallScaleRandom,
            BallScaleRipple,
            BallScaleRippleMultiple,
            BallSpinFadeLoader,
            BallSpinLoader,
            BallTrianglePath,
            BallZigZag,
            BallZigZagDeflect,
            LineScale,
            LineScaleParty,
            LineScalePulseOut,
            LineScalePulseOutRapid, LineScaleRandom,
            LineSpinFadeLoader,
            CubeTransition,
            Pacman,
            SemiCircleSpin,
            SquareSpin,
            TriangleSkewSpin];
       
        return (
            <div>
                 {TagName.map((Item) =>
                 <div>
                    <br / > <br / > {Item.toString() }<br / ><br / >
                     <Item color={'#4e4f52'} loading={true} />
                     </div>
                )}
               
            </div>
        );
    }
}
