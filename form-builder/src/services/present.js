export default {
  // formsubmit: function (url, thisx) {
  //   thisx.axios.post(url, thisx.tables)
  //     .then((res) => {
  //       console.log(res)
  //       if (res.data === 1) {
  //         alert('Success!')
  //       } else {
  //         alert('System Wrong!')
  //         // console.log(typeof res.data)
  //       }
  //     })
  // },
  getform: function (url, thisx) {
    thisx.axios.get(url, {
      params: {}
    }).then(function (res) {
    // console.log(res.data)
      thisx.items = res.data
      // console.log(thisx.items)
    })
  },
  getdetails: function (url, thisx) {
    thisx.axios.post(url, {
      params: {key: thisx.fkey}
    }).then(function (res) {
      thisx.items = res.data
      thisx.keys = Object.keys(res.data[0])
      // console.log(thisx.items)
      // console.log(thisx.keys)
    })
  }
}

// exports.getform = present.getform
