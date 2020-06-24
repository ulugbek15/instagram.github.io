const bio = [
	{id: 1, username: 'jane', bio: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️', name: 'Jane Doe'},
	{id: 2, username: 'anna', bio: ' Lorem ipsum ...', name: 'Ann Doe'}
]

const HomeController = (req,res) => {
	res.send('Home')
}

const ProfileController = (req,res) => {

	const username = req.params.username
	const bioInfo = bio.find( u => u.username === username )

	if(bioInfo){
	    res.render('user-profile', {
		username: username,
		name: bioInfo.name,
		postCount: 200,
		followersCount:300,
		followingCount: 100,
		bio: bioInfo.bio,
		commentsCount: 5,
		likesCount:25
		})
	}
	else{
		res.status(404)
		res.send('error 404 this page is not defined')
	}
}

module.exports.HomeController = HomeController
module.exports.ProfileController = ProfileController