class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :second_name, :username, :email, :phone_number, :role, :password_digest
end
