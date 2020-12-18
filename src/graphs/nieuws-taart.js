import React, { Component } from "react";
import { ResponsivePie } from "@nivo/pie";

export class NieuwsTaart extends Component {
    constructor(props) {
        super(props)
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
    
      componentDidMount() {
        fetch("http://127.0.0.1:5000/items/statistics")
          .then(res => res.json())
          .then(
            (result) => {
              console.log(result)
              this.setState({
                isLoaded: true,
                items: result
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    
  render() {
    const { error, isLoaded, items} = this.state;

    return (
      // make sure parent container have a defined height when using
      <div className="chart-wrapper">
        <ResponsivePie
        data={items}
        value="aantal_items"
        id="title"
        isInteractive={true}
        sortByValue={true}
        margin={{ top: 50, right: 160, bottom: 50, left: 150 }}
        innerRadius={0.4}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: 'set1' }}
        borderWidth={0}
        enableRadialLabels={false}
        radialLabel="id"
        radialLabelsLinkStrokeWidth={2}
        radialLabelsSkipAngle={7}
        radialLabelsTextColor="#333333"
        radialLabelsLinkColor={{ from: 'color' }}
        sliceLabelsSkipAngle={5}
        sliceLabelsTextColor="#333333"
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: "RTV Noord"
                },
                id: 'dots'
            },
            {
                match: {
                    id: "OOGtv"
                },
                id: 'lines'
            },
            {
                match: {
                    id: "3voor12 Groningen"
                },
                id: 'dots'
            }
        ]}
        legends={[
            {
                anchor: 'right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 13,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
      </div>
    );
  }
}
