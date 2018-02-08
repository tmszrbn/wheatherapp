import React from 'react';

const Weather48h = (props) => {
  if (!!props.weather.tValues) {
    const weather = props.weather;

    // props: label, icon, val, after
    const Weather48Cell = (props) => {
      if (typeof props.val !== 'undefined') {
        return (
          <td
            className={`weather-48h__cell tooltip`} data-tooltip={`${props.date.split(':')[0].slice(5)} ${props.date.split(':')[1] + ':00'} - ${props.label}`}>
            <span className={props.icon} aria-hidden="true"></span>
            <span className="visuallyhidden">{props.label}</span>
            {
              props.icon
                ? `\u0020${props.val}`
                : `${props.val}`
            }{
              props.after
                ? props.after
                : null
            }
          </td>
        )
      } else {
        return (<td className={`weather-48h__cell tooltip`} data-tooltip={`${props.date} - ${props.label}`}>
          b.d.
        </td>)
      }
    }
    return (<table className="weather-48h__table">
      <caption className="weather-48h__caption">
        <h2>Prognoza 48-godzinna</h2>
      </caption>

      <tbody>
        {
          weather.tValues.map((val, j) => {
            const date = val[2];
            return (<tr key={j} className={`weather-48h__row`}>
              {
                [ 2, 15, 0, 7, 12, 14, 20, 21, 1, 18 ].map(i => {
                  let label = weather.tLabelsPL[i];
                  switch (i) {
                    case 2:
                      return (<td key={(j + 1) * 10^i} className={`weather-48h__cell tooltip`} data-tooltip={label}>
                        {val[i].split(':').join(' ') + ':00'}
                      </td>)
                    case 15:
                      return (<Weather48Cell key={(j + 1) * 10^i} date={date} label={label} icon={"fa fa-thermometer-half"} val={val[i]} after={`\u00b0C`}/>)
                    case 0:
                      return (<Weather48Cell key={(j + 1) * 10^i} date={date} label={label} icon={"fa fa-hand-paper"} val={val[i]} after={`\u00b0C`}/>)
                    case 7:
                      return (<Weather48Cell key={(j + 1) * 10^i} date={date} label={label} icon={"fas fa-tint"} val={val[i]} after={`\u0020mm`}/>)
                    case 12:
                      return (<Weather48Cell key={(j + 1) * 10^i} date={date} label={label} icon={"fas fa-snowflake"} val={val[i]} after={`\u0020mm`}/>)
                    case 14:
                      return (<Weather48Cell key={(j + 1) * 10^i} date={date} label={label}
                        val={val[i]} after={`\u0020mm`}/>)
                    case 20:
                      return (<Weather48Cell key={(j + 1) * 10^i} date={date} label={label}
                        val={val[i]} after={`\u0020m/s`}/>)
                    case 21:
                      return (<td key={(j + 1) * 10^i} className={`weather-48h__cell tooltip`} data-tooltip={`${date.split(':')[1]}:00 - ${label}`}>
                        {
                          <span style={{
                                display: 'block',
                                transform: `rotate(${val[i]}deg)`
                              }}>↓</span>
                        }
                        {/* TODO */}
                      </td>)
                    case 1:
                      return (<Weather48Cell key={(j + 1) * 10^i} date={date} label={label} icon={"fas fa-cloud"} val={val[i]} after={`%`}/>)
                      // 12, 14, 20, 21, 1, 18
                    case 18:
                      return (<Weather48Cell key={(j + 1) * 10^i} date={date} label={label} icon={"fas fa-eye"} val={val[i]} after={`\u0020km`}/>)
                    default:
                      return (<td key={(j + 1) * 10^i} className={`weather-48h__cell tooltip`} data-tooltip={label}>
                        {val[i]}
                      </td>)
                  }
                })
              }
            </tr>)
          })
        }
      </tbody>
    </table>)
  } else {
    return <span className="fas fa-spinner fa-spin"></span>;
  }
}

export default Weather48h;
