json.extract! user, :id, :username, :email
json.image_url url_for(user.photo)