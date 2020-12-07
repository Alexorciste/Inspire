class TextPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
    end
  end

  def show?
    #raise
    record.project.bands.each do |band|
      return true if band[:user_id] == user.id
    end
    record.project.user == user
  end

  def create?
    true
  end

  def update?
    record.project.bands.each do |band|
      if band[:user_id] == user.id
        return band[:write_acces]
      end
    end
    record.project.user == user
  end

  def destroy?
    record.project.user == user
  end

end
