function fetchProfileData(){
  const url = 'https://api.github.com/users/galemagalhaes'
  const fetching = await fetch(url)
  return await fetching.json()
}