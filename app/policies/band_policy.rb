class BandPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
    end
  end

  def search?
    true
  end

  def create?
    true
  end

end
