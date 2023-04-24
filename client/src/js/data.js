export function data() {
  return {
    SERVER: 'https://galleria-server.onrender.com/',
    async fetchData() {
      const request = await fetch(this.SERVER + 'assets/imagedata.json')
      const data = await request.json()
      return data
    },
  }
}
