class TextPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
    end
  end

  def show?
    record.project.user == user
  end

  def create?
    true
  end

  def update?
    record.project.user == user
  end

  def destroy?
    record.project.user == user
  end

end
