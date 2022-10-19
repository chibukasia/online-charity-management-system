class AdminSerializer < ActiveModel::Serializer
  attributes :id, :password_digest
end
