function sendformdata (url, thisx) {
  thisx.axios.post(url, thisx.items)
    .then((res) => {
      console.log(res)
      if (res.data === 1) {
        alert('Success!')
      } else {
        alert('System Wrong!')
        // console.log(typeof res.data)
      }
    })
}

exports.sendformdata = sendformdata
