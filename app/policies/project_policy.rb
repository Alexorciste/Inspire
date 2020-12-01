class ProjectPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      # scope.all
      scope.where(user: user)
    end
  end

  def show?
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
