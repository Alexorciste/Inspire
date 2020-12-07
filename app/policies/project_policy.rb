class ProjectPolicy < ApplicationPolicy

  class Scope < Scope
    def resolve
      scope.where(user: user)

      #band.user_id: user.id
    end
  end

  def show?
    record.bands.each do |band|
      return true if band[:user_id] == user.id
    end
    record.user == user
  end

  def create?
    true
  end

  def update?
    record.user == user
  end

  def destroy?
    record.user == user
  end
end
