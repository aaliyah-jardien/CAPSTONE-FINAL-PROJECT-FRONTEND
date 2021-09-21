function logout() {
    user = [];
    localStorage.setItem('user', JSON.stringify(user))
    window.location.reload()
  }